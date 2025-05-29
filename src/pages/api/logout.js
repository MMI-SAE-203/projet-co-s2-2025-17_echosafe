export async function POST() {
    // Créer un cookie expiré pour remplacer le cookie d'authentification
    const expiredCookie = "pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax; Secure";
    
    return new Response(
      JSON.stringify({
        status: "success",
        message: "Déconnexion réussie",
        redirect: "/"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": expiredCookie
        }
      }
    );
  }