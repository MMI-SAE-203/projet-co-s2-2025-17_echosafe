import { c as createAstro, a as createComponent, e as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../../chunks/Layoutapp_5LaSD89_.mjs';
import PocketBase from 'pocketbase';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Informations = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Informations;
  let userData = null;
  let userAvatar = null;
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  if (!pb.authStore.isValid) {
    return Astro2.redirect("/auth/connexion");
  }
  try {
    const userId = pb.authStore.model.id;
    userData = await pb.collection("users").getOne(userId);
    if (userData.avatar) {
      userAvatar = `https://echosafe.eloishenry.fr/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`;
    }
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des donn\xE9es utilisateur:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layoutapp", $$Layoutapp, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-12">
+ <div class="flex items-center mb-10"> <a href="/profil" class="text-primary mr-3 hover:opacity-80 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a> <h1 class="text-2xl font-bold">Informations personnelles</h1> </div> ${userData ? renderTemplate`<div> <!-- Section avatar - Redesign avec animation au survol --> <div class="flex justify-center mb-10"> <div class="relative group"> <div class="w-28 h-28 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105"> ${userAvatar ? renderTemplate`<img${addAttribute(userAvatar, "src")} alt="Photo de profil" class="w-full h-full object-cover">` : renderTemplate`<div class="bg-gradient-to-br from-primary/80 to-primary w-full h-full flex items-center justify-center"> <span class="text-4xl font-bold text-white"> ${userData.prenom_utilisateur?.charAt(0).toUpperCase() || userData.pseudo?.charAt(0).toUpperCase() || "U"} </span> </div>`} </div> <button id="change-avatar-btn" class="absolute bottom-0 right-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-all shadow-md opacity-90 hover:opacity-100" aria-label="Changer d'avatar"> <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path> </svg> </button> </div> </div> <div class="space-y-10"> <section> <h2 class="text-xl font-semibold mb-6 pb-2 border-b">
Informations de base
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-sm uppercase tracking-wider mb-1">Pseudo</h3> <p class="font-medium">${userData.pseudo || "Non d\xE9fini"}</p> </div> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-sm uppercase tracking-wider mb-1">Prénom</h3> <p class="font-medium">${userData.prenom_utilisateur || "Non d\xE9fini"}</p> </div> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-sm uppercase tracking-wider mb-1">Nom</h3> <p class="font-medium">${userData.nom_utilisateur || "Non d\xE9fini"}</p> </div> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-sm uppercase tracking-wider mb-1">Date de naissance</h3> <p class="font-medium"> ${userData.date_naissance_utilisateur ? new Date(userData.date_naissance_utilisateur).toLocaleDateString("fr-FR") : "Non d\xE9finie"} </p> </div> </div> </section> <section> <h2 class="text-xl font-semibold mb-6 pb-2 border-b ">
Informations de contact
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-sm uppercase tracking-wider mb-1">Email</h3> <p class="font-medium">${userData.email || "Non d\xE9fini"}</p> </div> <div class="bg-gray-50 p-4 rounded-lg"> <h3 class="text-sm uppercase tracking-wider mb-1">Téléphone</h3> <p class="font-medium">${userData.telephone_utilisateur || "Non d\xE9fini"}</p> </div> </div> </section> <section> <h2 class="text-xl font-semibold mb-6 pb-2 border-b">
À propos de moi
</h2> <div class="bg-gray-50 p-5 rounded-lg"> <p class="whitespace-pre-line">${userData.bio || "Aucune biographie renseign\xE9e"}</p> </div> </section> </div> <div class="mt-10 flex justify-center"> <button id="edit-profile-btn" class="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center gap-2 shadow-md"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path> </svg>
Modifier mes informations
</button> </div> </div>` : renderTemplate`<div class="text-center py-16"> <div class="animate-pulse flex flex-col items-center"> <div class="rounded-full bg-gray-200 h-24 w-24 mb-6"></div> <div class="h-6 bg-gray-200 rounded w-1/2 mb-4"></div> <div class="h-4 bg-gray-200 rounded w-1/3 mb-2"></div> <div class="h-4 bg-gray-200 rounded w-1/4"></div> </div> <p class=" mt-6">Chargement des informations...</p> </div>`} </div> ` })} ${renderScript($$result, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/informations.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/informations.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/informations.astro";
const $$url = "/profil/informations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Informations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
