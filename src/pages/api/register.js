import PocketBase from 'pocketbase';

export async function POST({ request }) {
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");
    const dateOfBirth = formData.get("date_naissance_utilisateur");
    const phoneNumber = formData.get("telephone_utilisateur");
    const prenom = formData.get("prenom_utilisateur");
    const nom = formData.get("nom_utilisateur");

    // Vérification des données côté serveur
    if (!email || !password || !passwordConfirm || !dateOfBirth || !phoneNumber || !prenom || !nom) {
      return new Response(JSON.stringify({
        status: "error",
        message: "Tous les champs sont obligatoires.",
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (password !== passwordConfirm) {
      return new Response(JSON.stringify({
        status: "error",
        message: "Les mots de passe ne correspondent pas.",
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Envoyer seulement les champs qui existent dans PocketBase
    // Ne pas inclure passwordConfirm comme champ séparé
    const userData = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm, // Nécessaire pour validation PocketBase
      prenom_utilisateur: prenom,
      nom_utilisateur: nom,
      date_naissance_utilisateur: dateOfBirth,
      telephone_utilisateur: phoneNumber,
    };

    console.log("Données envoyées à PocketBase:", userData);

    // Création de l'utilisateur dans PocketBase
    const user = await pb.collection("users").create(userData);
    
    return new Response(JSON.stringify({
      status: "success",
      message: "Inscription réussie !",
      user: {
        id: user.id,
        email: user.email
      } // Ne retournez pas le mot de passe!
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    
  } catch (error) {
    console.error("Erreur PocketBase:", error);
    
    // Amélioration de l'extraction du message d'erreur
    let errorMessage = "Erreur lors de la création du compte";
    
    if (error.response?.data) {
      // Extraction des messages d'erreur spécifiques
      const errors = error.response.data;
      const errorKeys = Object.keys(errors);
      
      if (errorKeys.length > 0) {
        errorMessage = `Erreur: ${JSON.stringify(errors)}`;
      }
    }
    
    return new Response(JSON.stringify({
      status: "error",
      message: errorMessage
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}