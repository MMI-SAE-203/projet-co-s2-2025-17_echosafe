import PocketBase from 'pocketbase';

export async function POST({ request }) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Email requis'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    const pb = new PocketBase('http://127.0.0.1:8090'); // Ajustez l'URL de votre instance PocketBase
    
    // Pour des raisons de sécurité, ne révélez pas si l'email existe ou non
    // Nous simulons toujours un succès
    
    try {
      // Essayer de trouver l'utilisateur
      const user = await pb.collection('users').getFirstListItem(`email="${email}"`);
      
      if (user) {
        // Générer un token de réinitialisation (utilisation d'une méthode simple pour l'exemple)
        const resetToken = Math.random().toString(36).substring(2, 15) + 
                           Math.random().toString(36).substring(2, 15);
        
        const resetTokenExpiry = new Date();
        resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1); // Expire dans 1 heure
        
        // Stocker le token dans la base de données
        await pb.collection('users').update(user.id, {
          reset_token: resetToken,
          reset_token_expiry: resetTokenExpiry.toISOString()
        });
        
        // Dans une application réelle, vous enverriez un email ici
        console.log(`Token de réinitialisation pour ${email}: ${resetToken}`);
        console.log(`Lien de réinitialisation: https://votresite.com/auth/reset-password?token=${resetToken}&userId=${user.id}`);
      }
    } catch (e) {
      // L'utilisateur n'existe pas, mais pour des raisons de sécurité, nous ne signalons pas cela
      console.log(`Tentative de réinitialisation pour un email inexistant: ${email}`);
    }
    
    // Toujours retourner un succès, qu'il y ait un utilisateur ou non
    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Si l\'email existe, un lien de réinitialisation a été envoyé'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Une erreur est survenue lors du traitement de la demande'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}