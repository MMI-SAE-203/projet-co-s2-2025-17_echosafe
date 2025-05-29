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
    const pseudo = formData.get("pseudo");
    const avatarFile = formData.get("avatar");

    // Vérification des données côté serveur
    if (!email || !password || !passwordConfirm || !dateOfBirth || !phoneNumber || !prenom || !nom || !pseudo) {
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
    const userData = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      prenom_utilisateur: prenom,
      nom_utilisateur: nom,
      date_naissance_utilisateur: dateOfBirth,
      telephone_utilisateur: phoneNumber,
      pseudo: pseudo
    };

    console.log("Données envoyées à PocketBase:", userData);

    // Création de l'utilisateur dans PocketBase
    const user = await pb.collection("users").create(userData);
    
    // Si un avatar a été téléchargé, le traiter séparément
    if (avatarFile && avatarFile.size > 0) {
      try {
        // Créer un nouveau FormData pour l'upload de l'avatar
        const avatarFormData = new FormData();
        avatarFormData.append('avatar', avatarFile);
        
        // Mettre à jour l'utilisateur avec l'avatar
        await pb.collection('users').update(user.id, avatarFormData);
        console.log("Avatar téléchargé avec succès");
      } catch (avatarError) {
        console.error("Erreur lors du téléchargement de l'avatar:", avatarError);
        // Ne pas échouer l'inscription si l'upload de l'avatar échoue
      }
    }
    
    return new Response(JSON.stringify({
      status: "success",
      message: "Inscription réussie !",
      user: {
        id: user.id,
        email: user.email
      }
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