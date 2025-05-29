import PocketBase from 'pocketbase';

export const post = async ({ request }) => {
  try {
    const data = await request.json();
    const { conversation_id, content, sender_id } = data;
    
    if (!conversation_id || !content || !sender_id) {
      return new Response(JSON.stringify({ error: 'Données manquantes' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Initialiser PocketBase
    const pb = new PocketBase("https://echosafe.eloishenry.fr");
    
    // Authentification admin - REMPLACEZ CES VALEURS par vos identifiants réels
    // ⚠️ Pour des raisons de sécurité, ces identifiants devraient être dans des variables d'environnement
    try {
      await pb.admins.authWithPassword("bryan.thierry@edu.univ-fcomte.fr", "1234567890");
      console.log("Authentification admin réussie");
    } catch (authError) {
      console.error("Erreur d'authentification admin:", authError);
      // On continue quand même pour tester d'autres méthodes
    }
    
    // Créer le message
    const newMessage = await pb.collection("messages").create({
      conversation_id: conversation_id,
      sender_id: sender_id,
      content: content,
      read_by: [sender_id]
    });
    
    console.log("Message créé avec succès:", newMessage);
    
    return new Response(JSON.stringify(newMessage), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Erreur API détaillée:', error);
    
    // Retourner une réponse d'erreur plus détaillée
    return new Response(JSON.stringify({ 
      error: 'Erreur serveur', 
      message: error.message,
      details: error.data ? error.data : null,
      status: error.status || 500
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}