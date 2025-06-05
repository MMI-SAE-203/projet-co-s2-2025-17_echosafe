import { c as createAstro, a as createComponent, e as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../../chunks/Layoutapp_5LaSD89_.mjs';
import PocketBase from 'pocketbase';
import { d as db } from '../../chunks/firebase_B1klU5AH.mjs';
import { collection, getDocs, query, where } from 'firebase/firestore';
/* empty css                                    */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  if (!pb.authStore.isValid) {
    return Astro2.redirect("/auth/connexion");
  }
  const currentUserId = pb.authStore.model.id;
  const isVolunteer = pb.authStore.model.is_volunteer === true;
  let users = [];
  try {
    const usersRef = collection(db, "users");
    const usersSnapshot = await getDocs(usersRef);
    users = usersSnapshot.docs.map((doc2) => ({
      id: doc2.id,
      ...doc2.data()
    })).filter((user) => user.id !== currentUserId);
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des utilisateurs:", error);
  }
  let existingConversations = {};
  try {
    const conversationsRef = collection(db, "conversations");
    const q = query(
      conversationsRef,
      where("type", "==", "private"),
      where("participants", "array-contains", currentUserId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((doc2) => {
      const conversation = doc2.data();
      const otherUserId = conversation.participants.find(
        (id) => id !== currentUserId
      );
      if (otherUserId) {
        existingConversations[otherUserId] = doc2.id;
      }
    });
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des conversations:", error);
  }
  const recentUsers = users.filter((user) => user.id in existingConversations);
  users.filter(
    (user) => user.is_volunteer === true || user.role === "volunteer"
  );
  const regularUsers = users.filter(
    (user) => user.is_volunteer !== true && user.role !== "volunteer"
  );
  const potentialFriends = regularUsers.filter(
    (user) => !(user.id in existingConversations)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layoutapp, { "data-astro-cid-id4g5qpv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-0 sm:px-4 py-0 sm:py-6 max-w-6xl" data-astro-cid-id4g5qpv> <div class="bg-white shadow-sm mb-4 sm:mb-6 sm:static sm:shadow-none sm:bg-transparent sm:rounded-lg sm:px-0" data-astro-cid-id4g5qpv> <div class="flex items-center justify-between p-4 sm:px-0 sm:py-2" data-astro-cid-id4g5qpv> <div class="flex items-center" data-astro-cid-id4g5qpv> <a href="/accueil-app" class="text-primary hover:underline flex items-center mr-3" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-id4g5qpv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-id4g5qpv></path> </svg> <span class="text-sm sm:text-base" data-astro-cid-id4g5qpv>Retour</span> </a> <h1 class="text-lg sm:text-2xl font-bold text-primary" data-astro-cid-id4g5qpv>Messages privés</h1> </div> <div class="relative hidden sm:block" data-astro-cid-id4g5qpv> <input type="text" id="search-users-desktop" placeholder="Rechercher un utilisateur..." class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-64" data-astro-cid-id4g5qpv> <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg> </div> </div> </div> <div class="px-4 pb-3 sm:hidden" data-astro-cid-id4g5qpv> <div class="relative" data-astro-cid-id4g5qpv> <input type="text" id="search-users-mobile" placeholder="Rechercher..." class="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:bg-white" data-astro-cid-id4g5qpv> <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg> </div> </div> </div> ${!isVolunteer && renderTemplate`<div class="flex border-t sm:hidden" data-astro-cid-id4g5qpv> <a href="/messages/prives" class="flex-1 py-3 text-center text-primary border-b-2 border-primary font-medium text-sm" data-astro-cid-id4g5qpv>
Messages privés
</a> <a href="/messages/aide" class="flex-1 py-3 text-center text-gray-500 hover:text-secondary font-medium text-sm" data-astro-cid-id4g5qpv>
Aide
</a> </div>`} </div> <div class="px-3 sm:px-0" data-astro-cid-id4g5qpv> ${!isVolunteer && renderTemplate`<div class="hidden sm:flex mb-6 border-b" data-astro-cid-id4g5qpv> <a href="/messages/prives" class="px-6 py-3 text-primary border-b-2 border-primary font-medium" aria-current="page" data-astro-cid-id4g5qpv>
Messages privés
</a> <a href="/messages/aide" class="px-6 py-3 text-gray-500 hover:text-secondary hover:border-b-2 hover:border-secondary font-medium" data-astro-cid-id4g5qpv>
Trouver de l'aide
</a> </div>`} ${recentUsers.length > 0 && renderTemplate`<div class="mb-6" data-astro-cid-id4g5qpv> <h2 class="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 px-3 sm:px-0 flex items-center" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg>
Conversations récentes
</h2> <div class="flex overflow-x-auto pb-2 sm:hidden px-3 -mx-3 space-x-3 hide-scrollbar recent-conversations" data-astro-cid-id4g5qpv> ${recentUsers.map((user) => renderTemplate`<a${addAttribute(`/messages/prives/${user.id}`, "href")} class="flex-shrink-0 w-48 flex items-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm" data-astro-cid-id4g5qpv> <div class="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-primary" data-astro-cid-id4g5qpv> <div class="w-full h-full flex items-center justify-center bg-primary text-white text-lg" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur?.charAt(0) || "?"} </div> </div> <div class="ml-3 flex-1 min-w-0" data-astro-cid-id4g5qpv> <p class="font-semibold text-gray-800 truncate text-sm" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur || "Utilisateur"} </p> <p class="text-xs text-gray-500 flex items-center" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg>
Continuer
</p> </div> </a>`)} </div> <div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" data-astro-cid-id4g5qpv> ${recentUsers.map((user) => renderTemplate`<a${addAttribute(`/messages/prives/${user.id}`, "href")} class="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition" data-astro-cid-id4g5qpv> <div class="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-primary" data-astro-cid-id4g5qpv> <div class="w-full h-full flex items-center justify-center bg-primary text-white text-lg" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur?.charAt(0) || "?"} </div> </div> <div class="ml-3 flex-1 min-w-0" data-astro-cid-id4g5qpv> <p class="font-semibold text-gray-800 truncate" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur || "Utilisateur"} </p> <p class="text-sm text-gray-500 flex items-center" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg>
Continuer la discussion
</p> </div> </a>`)} </div> </div>`} </div> ${!isVolunteer && potentialFriends.length > 0 && renderTemplate`<div class="mb-8 px-3 sm:px-0" data-astro-cid-id4g5qpv> <div class="flex items-center justify-between mb-3 sm:mb-4" data-astro-cid-id4g5qpv> <h2 class="text-base sm:text-lg font-semibold text-gray-800 flex items-center" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" data-astro-cid-id4g5qpv></path> </svg>
Trouver des amis
</h2> <button id="show-all-friends" class="text-primary text-sm font-medium hover:underline" data-astro-cid-id4g5qpv>
Voir tous
</button> </div> <div class="flex overflow-x-auto pb-2 sm:hidden -mx-3 space-x-3 hide-scrollbar potential-friends" data-astro-cid-id4g5qpv> ${potentialFriends.slice(0, 6).map((user) => renderTemplate`<a${addAttribute(`/messages/prives/${user.id}`, "href")} class="flex-shrink-0 w-40 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden" data-astro-cid-id4g5qpv> <div class="h-24 bg-blue-50 flex items-center justify-center" data-astro-cid-id4g5qpv> <div class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-blue-400" data-astro-cid-id4g5qpv> <div class="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur?.charAt(0) || "?"} </div> </div> </div> <div class="p-3" data-astro-cid-id4g5qpv> <p class="font-semibold text-gray-800 truncate text-sm text-center" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur || "Utilisateur"} </p> <div class="w-full mt-2 py-1.5 px-2 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors text-center" data-astro-cid-id4g5qpv>
Envoyer un message
</div> </div> </a>`)} </div> <div class="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 potential-friends-grid" data-astro-cid-id4g5qpv> ${potentialFriends.slice(0, 10).map((user) => renderTemplate`<a${addAttribute(`/messages/prives/${user.id}`, "href")} class="bg-white rounded-lg border border-gray-200 hover:shadow-md transition overflow-hidden group" data-astro-cid-id4g5qpv> <div class="h-28 bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors" data-astro-cid-id4g5qpv> <div class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-blue-400" data-astro-cid-id4g5qpv> <div class="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur?.charAt(0) || "?"} </div> </div> </div> <div class="p-3" data-astro-cid-id4g5qpv> <p class="font-semibold text-gray-800 truncate text-center" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur || "Utilisateur"} </p> <div class="w-full mt-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center" data-astro-cid-id4g5qpv>
Envoyer un message
</div> </div> </a>`)} </div> </div>`} <div class="sm:bg-white sm:rounded-lg sm:shadow-lg sm:overflow-hidden" data-astro-cid-id4g5qpv> <div class="border-b px-4 sm:px-6 py-3 sm:py-4 bg-gray-50" data-astro-cid-id4g5qpv> <h2 class="text-base sm:text-lg font-semibold text-gray-800 flex items-center" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" data-astro-cid-id4g5qpv></path> </svg>
Tous les utilisateurs
</h2> </div> <div class="user-grid sm:p-0" data-astro-cid-id4g5qpv> ${users.length > 0 ? renderTemplate`<div class="divide-y divide-gray-100" data-astro-cid-id4g5qpv> ${users.map((user) => {
    user.id in existingConversations;
    return renderTemplate`<a${addAttribute(`/messages/prives/${user.id}`, "href")} class="flex items-center p-4 sm:p-6 hover:bg-gray-50 transition" data-astro-cid-id4g5qpv> <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden" data-astro-cid-id4g5qpv> <div class="w-full h-full flex items-center justify-center bg-primary text-white text-lg sm:text-xl" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur?.charAt(0) || "?"} </div> </div> <div class="ml-4 flex-1" data-astro-cid-id4g5qpv> <p class="font-semibold text-gray-800 text-base sm:text-lg" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur || "Utilisateur"} </p> <p class="text-sm text-gray-500 mt-1" data-astro-cid-id4g5qpv> ${user.is_volunteer === true || user.role === "volunteer" ? renderTemplate`<span class="inline-flex items-center bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" data-astro-cid-id4g5qpv></path> </svg>
Aidant
</span>` : renderTemplate`<span data-astro-cid-id4g5qpv>Utilisateur</span>`} </p> </div> <div class="text-primary" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg> </div> </a>`;
  })} </div>` : renderTemplate`<div class="text-center py-6 sm:py-8 bg-gray-50" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 sm:h-12 w-10 sm:w-12 mx-auto text-gray-400 mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-id4g5qpv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-id4g5qpv></path> </svg> <p class="text-gray-500 text-base sm:text-lg" data-astro-cid-id4g5qpv>
Aucun autre utilisateur disponible.
</p> <p class="text-xs sm:text-sm text-gray-400 mt-2" data-astro-cid-id4g5qpv>
Revenez plus tard ou invitez d'autres personnes à rejoindre la
                plateforme.
</p> </div>`} </div> </div> <div id="all-friends-modal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden" data-astro-cid-id4g5qpv> <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden" data-astro-cid-id4g5qpv> <div class="p-4 border-b border-gray-200 flex justify-between items-center" data-astro-cid-id4g5qpv> <h3 class="text-lg font-semibold text-gray-800" data-astro-cid-id4g5qpv>Trouver des amis</h3> <button id="close-modal" class="text-gray-500 hover:text-gray-700" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-id4g5qpv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-id4g5qpv></path> </svg> </button> </div> <div class="p-4 overflow-y-auto max-h-[calc(90vh-60px)]" data-astro-cid-id4g5qpv> <div class="relative mb-4" data-astro-cid-id4g5qpv> <input type="text" id="search-friends-modal" placeholder="Rechercher un ami..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" data-astro-cid-id4g5qpv> <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-astro-cid-id4g5qpv> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-id4g5qpv> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-astro-cid-id4g5qpv></path> </svg> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 modal-friend-grid" data-astro-cid-id4g5qpv> ${potentialFriends.map((user) => renderTemplate`<a${addAttribute(`/messages/prives/${user.id}`, "href")} class="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"${addAttribute(user.pseudo_utilisateur || "Utilisateur", "data-name")} data-astro-cid-id4g5qpv> <div class="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-blue-400" data-astro-cid-id4g5qpv> <div class="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur?.charAt(0) || "?"} </div> </div> <p class="font-semibold text-gray-800 text-center mt-2" data-astro-cid-id4g5qpv> ${user.pseudo_utilisateur || "Utilisateur"} </p> <div class="w-full mt-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center" data-astro-cid-id4g5qpv>
Envoyer un message
</div> </a>`)} </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/prives/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/prives/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/prives/index.astro";
const $$url = "/messages/prives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
