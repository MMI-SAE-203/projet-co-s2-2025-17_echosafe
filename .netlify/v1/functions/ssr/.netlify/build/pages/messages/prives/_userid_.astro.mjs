import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../../../chunks/Layoutapp_5LaSD89_.mjs';
import { $ as $$ChatConversation } from '../../../chunks/ChatConversation_uVYBR00K.mjs';
import PocketBase from 'pocketbase';
import { d as db } from '../../../chunks/firebase_B1klU5AH.mjs';
import { doc, getDoc, collection, query, where, getDocs, addDoc, serverTimestamp, orderBy } from 'firebase/firestore';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$userId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$userId;
  const { userId } = Astro2.params;
  if (!userId) {
    return Astro2.redirect("/messages/prives");
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
  let otherUser = null;
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      otherUser = {
        id: userSnap.id,
        ...userSnap.data()
      };
    } else {
      console.error("Utilisateur non trouv\xE9 dans Firestore");
      return Astro2.redirect("/messages/prives");
    }
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration de l'utilisateur:", error);
    return Astro2.redirect("/messages/prives");
  }
  let conversation = null;
  try {
    const conversationsRef = collection(db, "conversations");
    const q = query(
      conversationsRef,
      where("type", "==", "private"),
      where("participants", "array-contains", currentUserId)
    );
    const querySnapshot = await getDocs(q);
    for (const doc2 of querySnapshot.docs) {
      const data = doc2.data();
      if (data.participants.includes(userId)) {
        conversation = {
          id: doc2.id,
          ...data
        };
        break;
      }
    }
    if (!conversation) {
      const newConversation = await addDoc(collection(db, "conversations"), {
        type: "private",
        participants: [currentUserId, userId],
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      });
      conversation = {
        id: newConversation.id,
        type: "private",
        participants: [currentUserId, userId]
      };
    }
  } catch (error) {
    console.error(
      "Erreur lors de la r\xE9cup\xE9ration/cr\xE9ation de la conversation:",
      error
    );
    return Astro2.redirect("/messages/prives");
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
  otherUser = otherUser || {};
  otherUser.avatarUrl = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layoutapp, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col h-[calc(100vh-64px)] bg-gray-100"> <div class="container mx-auto px-4 py-3 flex items-center"> <a href="/messages/prives" class="text-primary hover:bg-gray-100 p-1.5 rounded-full flex items-center mr-2 transition-colors" title="Retour aux utilisateurs"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a> <div class="flex items-center"> <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-medium mr-2"> ${otherUser.pseudo_utilisateur?.charAt(0) || "?"} </div> <div> <p class="font-medium"> ${otherUser.pseudo_utilisateur || "Utilisateur"} </p> <p class="text-xs text-gray-500 flex items-center"> <span class="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
En ligne
</p> </div> </div> <div class="ml-auto flex items-center space-x-2"> <button class="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Options"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path> </svg> </button> </div> </div> <div class="flex-1 overflow-hidden px-4 pb-4"> <div class="bg-white rounded-lg shadow-lg overflow-hidden h-full"> ${renderComponent($$result2, "ChatConversation", $$ChatConversation, { "conversationId": conversation?.id, "otherUser": otherUser, "messages": messages, "currentUserId": currentUserId })} </div> </div> </div> ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/prives/[userId].astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/prives/[userId].astro";
const $$url = "/messages/prives/[userId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$userId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
