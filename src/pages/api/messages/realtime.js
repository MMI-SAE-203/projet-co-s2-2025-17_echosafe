import PocketBase from 'pocketbase';

export const get = async ({ request }) => {
  const url = new URL(request.url);
  const conversationId = url.searchParams.get('conversation');
  const userId = url.searchParams.get('user');
  
  if (!conversationId || !userId) {
    return new Response('Paramètres manquants', { status: 400 });
  }
  
  // Configurer les en-têtes pour Server-Sent Events
  return new Response(
    new ReadableStream({
      start(controller) {
        // Envoyer un message initial pour établir la connexion
        controller.enqueue('data: {"type":"connected"}\n\n');
        
        // Garder la connexion ouverte avec un ping toutes les 30 secondes
        const pingInterval = setInterval(() => {
          controller.enqueue('data: {"type":"ping"}\n\n');
        }, 30000);
        
        // Nettoyer l'intervalle lorsque la connexion est fermée
        request.signal.addEventListener('abort', () => {
          clearInterval(pingInterval);
        });
      }
    }),
    {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    }
  );
};