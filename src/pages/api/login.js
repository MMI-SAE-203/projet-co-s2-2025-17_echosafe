import PocketBase from 'pocketbase';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const rememberMe = formData.get("remember-me") === "true";

    if (!email || !password) {
      return new Response(JSON.stringify({
        status: "error",
        message: "Email et mot de passe sont requis",
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const pb = new PocketBase("https://pocketbase-echo-safe.fly.dev/");
    
    // Authentification avec PocketBase
    await pb.collection("users").authWithPassword(email, password);
        
    // Définir une date d'expiration longue si "Se souvenir de moi" est coché
    const cookieExpiration = rememberMe 
      ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 an si "Se souvenir de moi" est coché
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);  // 30 jours par défaut
    
    // Exporter avec une expiration personnalisée
    const authData = pb.authStore.exportToCookie({
      expires: cookieExpiration,
      secure: true,
      sameSite: "Lax",
      path: "/"
    });
    
    // Redirection en fonction du statut d'utilisateur (si nouvel utilisateur -> formulaire, sinon accueil-app)
    const user = pb.authStore.model;
    let redirectUrl = "/accueil-app";
    
    return new Response(JSON.stringify({
      status: "success",
      message: "Connexion réussie !",
      redirect: redirectUrl,
      token: authData
    }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        // Définir le cookie d'authentification avec l'expiration
        "Set-Cookie": authData
      },
    });
    
  } catch (error) {
    console.error("Erreur de connexion:", error);
    
    // Réponse pour les informations d'identification invalides
    if (error.status === 400) {
      return new Response(JSON.stringify({
        status: "error",
        message: "Email ou mot de passe incorrect",
      }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    // Réponse pour les autres erreurs
    return new Response(JSON.stringify({
      status: "error",
      message: "Erreur lors de la connexion. Veuillez réessayer."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}