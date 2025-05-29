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

    const pb = new PocketBase("https://echosafe.eloishenry.fr");
    
    // Authentification avec PocketBase
    await pb.collection("users").authWithPassword(email, password);
    
    // Si on arrive ici, l'authentification a réussi
    // Récupérer le token d'authentification pour le stocker côté client
    const authData = pb.authStore.exportToCookie();
    
    return new Response(JSON.stringify({
      status: "success",
      message: "Connexion réussie !",
      redirect: "/formulaire",
      token: authData
    }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        // Définir le cookie d'authentification
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