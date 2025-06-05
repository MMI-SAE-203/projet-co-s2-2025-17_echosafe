import { d as db } from '../../../chunks/firebase_B1klU5AH.mjs';
import { doc, getDoc, collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

async function POST({ request }) {
  try {
    const body = await request.json();
    const { conversation_id, content, sender_id } = body;

    console.log("API: Réception d'une demande d'envoi", { conversation_id, sender_id });

    if (!conversation_id || !content || !sender_id) {
      return new Response(
        JSON.stringify({ 
          error: "Données manquantes: conversation_id, content et sender_id sont requis" 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Vérifier que la conversation existe
    const conversationRef = doc(db, "conversations", conversation_id);
    const conversationSnap = await getDoc(conversationRef);
    
    if (!conversationSnap.exists()) {
      return new Response(
        JSON.stringify({ error: "Conversation non trouvée" }), 
        { 
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Ajouter le message
    const messagesRef = collection(db, "messages");
    const newMessage = await addDoc(messagesRef, {
      conversation_id,
      content,
      sender_id,
      read_by: [sender_id],
      created_at: serverTimestamp()
    });

    console.log("API: Message créé avec ID", newMessage.id);

    // Mettre à jour la conversation avec le dernier message
    await updateDoc(conversationRef, {
      last_message_id: newMessage.id,
      updated_at: serverTimestamp()
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: newMessage.id 
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Erreur API:', error);
    return new Response(
      JSON.stringify({ error: error.message || "Une erreur est survenue" }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
