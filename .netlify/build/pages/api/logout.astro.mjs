export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

async function POST() {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
