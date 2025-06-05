import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../../../chunks/Layoutapp_5LaSD89_.mjs';
import { $ as $$ChatConversation } from '../../../chunks/ChatConversation_uVYBR00K.mjs';
import PocketBase from 'pocketbase';
import { d as db } from '../../../chunks/firebase_B1klU5AH.mjs';
import { doc, getDoc, collection, query, where, getDocs, addDoc, serverTimestamp, orderBy } from 'firebase/firestore';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$aidantId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$aidantId;
  const { aidantId } = Astro2.params;
  const conversationId = Astro2.url.searchParams.get("conv");
  if (!aidantId) {
    return Astro2.redirect("/messages/aide");
  }
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  if (!pb.authStore.isValid) {
    return Astro2.redirect("/auth/connexion");
  }
  const currentUserId = pb.authStore.model.id;
  let aidant = null;
  try {
    const aidantRef = doc(db, "users", aidantId);
    const aidantSnap = await getDoc(aidantRef);
    if (aidantSnap.exists()) {
      aidant = {
        id: aidantSnap.id,
        ...aidantSnap.data()
      };
    } else {
      console.error("Aidant non trouv\xE9 dans Firestore");
      return Astro2.redirect("/messages/aide");
    }
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration de l'aidant:", error);
    return Astro2.redirect("/messages/aide");
  }
  let conversation = null;
  try {
    if (conversationId) {
      const conversationRef = doc(db, "conversations", conversationId);
      const conversationSnap = await getDoc(conversationRef);
      if (conversationSnap.exists()) {
        conversation = {
          id: conversationSnap.id,
          ...conversationSnap.data()
        };
      } else {
        throw new Error("Conversation non trouv\xE9e");
      }
    } else {
      const conversationsRef = collection(db, "conversations");
      const q = query(
        conversationsRef,
        where("type", "==", "help"),
        where("participants", "array-contains", currentUserId)
      );
      const querySnapshot = await getDocs(q);
      for (const doc2 of querySnapshot.docs) {
        const data = doc2.data();
        if (data.participants.includes(aidantId)) {
          conversation = {
            id: doc2.id,
            ...data
          };
          break;
        }
      }
      if (!conversation) {
        const newConversation = await addDoc(collection(db, "conversations"), {
          type: "help",
          participants: [currentUserId, aidantId],
          created_at: serverTimestamp(),
          updated_at: serverTimestamp()
        });
        conversation = {
          id: newConversation.id,
          type: "help",
          participants: [currentUserId, aidantId]
        };
      }
    }
  } catch (error) {
    console.error(
      "Erreur lors de la r\xE9cup\xE9ration/cr\xE9ation de la conversation:",
      error
    );
    return Astro2.redirect("/messages/aide");
  }
  let messages = [];
  if (conversation) {
    try {
      const messagesRef = collection(db, "messages");
      const q = query(
        messagesRef,
        where("conversation_id", "==", conversation.id),
        orderBy("created_at", "asc")
      );
      const querySnapshot = await getDocs(q);
      messages = querySnapshot.docs.map((doc2) => ({
        id: doc2.id,
        ...doc2.data(),
        created: doc2.data().created_at ? doc2.data().created_at.toDate() : /* @__PURE__ */ new Date(),
        updated: doc2.data().updated_at ? doc2.data().updated_at.toDate() : /* @__PURE__ */ new Date()
      }));
    } catch (error) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des messages:", error);
    }
  }
  aidant = aidant || {};
  aidant.avatarUrl = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layoutapp, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col h-[calc(100vh-64px)] bg-gray-100"> <div class="container mx-auto px-4 py-3 flex items-center"> <a href="/messages/aide" class="text-primary hover:bg-gray-100 p-1.5 rounded-full flex items-center mr-2 transition-colors" title="Retour aux aidants"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a> <div class="flex items-center"> <div class="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white font-medium mr-2"> ${aidant.pseudo_utilisateur?.charAt(0) || "A"} </div> <div> <p class="font-medium">${aidant.pseudo_utilisateur || "Aidant"}</p> <p class="text-xs text-secondary">
Aidant bénévole • Conversation confidentielle
</p> </div> </div> </div> <div class="flex-1 overflow-hidden px-4 pb-4"> <div class="bg-white rounded-lg shadow-lg overflow-hidden h-full"> ${renderComponent($$result2, "ChatConversation", $$ChatConversation, { "conversationId": conversation?.id, "otherUser": aidant, "messages": messages, "currentUserId": currentUserId, "isVolunteerChat": true })} </div> </div> </div> ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/aide/[aidantId].astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/aide/[aidantId].astro";
const $$url = "/messages/aide/[aidantId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$aidantId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
