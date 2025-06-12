import PocketBase from 'pocketbase';

export async function POST({ request }) {
  try {
    const requestData = await request.json();
    
    // Vérifier que toutes les données requises sont présentes
    if (!requestData.user || !requestData.responses || !requestData.questions || !requestData.completed_at) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Données incomplètes"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Récupérer le cookie d'authentification
    const authCookie = request.headers.get("cookie");
    
    // Initialiser PocketBase
    const pb = new PocketBase("http://127.0.0.1:8090");
    
    // Charger l'authentification à partir du cookie
    if (authCookie) {
      pb.authStore.loadFromCookie(authCookie);
    }
    
    // Vérifier que l'utilisateur est authentifié
    if (!pb.authStore.isValid) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Vous devez être connecté pour enregistrer vos réponses"
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Récupérer l'email de l'utilisateur pour la redirection
    const userEmail = pb.authStore.model.email;

    // Préparation des données à enregistrer
    const dataToSave = {
      user: requestData.user,
      responses: JSON.stringify(requestData.responses),
      questions: JSON.stringify(requestData.questions),
      completed_at: requestData.completed_at
    };
    
    // Enregistrement dans PocketBase
    const record = await pb.collection("form_responses").create(dataToSave);
    
    // Déconnecter l'utilisateur pour forcer la connexion
    pb.authStore.clear();
    
    return new Response(
      JSON.stringify({
        status: "success",
        message: "Réponses enregistrées avec succès",
        data: record,
        redirect: `/auth/connexion?email=${encodeURIComponent(userEmail)}`
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          // Supprimer le cookie d'authentification
          "Set-Cookie": "pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax; Secure"
        }
      }
    );
  } catch (error) {
    console.error("Erreur lors de l'enregistrement des réponses:", error);
    
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Une erreur est survenue lors de l'enregistrement des réponses",
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}