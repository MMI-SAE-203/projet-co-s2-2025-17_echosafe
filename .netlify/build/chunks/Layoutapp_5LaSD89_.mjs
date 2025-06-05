import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderComponent, d as renderScript, r as renderTemplate, b as addAttribute, h as renderHead, f as renderSlot } from './astro/server_DviQv69v.mjs';
import 'kleur/colors';
import PocketBase from 'pocketbase';
import { L as Logo } from './logo_echosafe_DeMEOBng.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://echosafe.eloishenry.fr/");
const $$Headerapp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Headerapp;
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  let isLoggedIn = false;
  let userData = null;
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
    isLoggedIn = pb.authStore.isValid;
    userData = pb.authStore.model;
  }
  if (!isLoggedIn) {
    return Astro2.redirect("/auth/connexion");
  }
  return renderTemplate`${maybeRenderHead()}<header class="px-6 py-4 w-full z-15 flex items-stretch justify-between transition-all duration-300 ease-in-out bg-white shadow-sm"> <div class="flex items-center gap-2"> <a href="/accueil-app"> ${renderComponent($$result, "Logo", Logo, { "class": "w-20 lg:w-32 h-auto" })} </a> <h1 id="page-title" class="text-lg font-semibold ml-4 hidden md:block"></h1> </div> <div class="hidden md:flex items-center"> <nav class="mr-4"> <ul class="flex space-x-6"> <li> <a href="/accueil-app" class="text-gray-700 hover:text-primary">Accueil</a> </li> <li> <a href="/messages" class="text-gray-700 hover:text-primary">Messagerie</a> </li> <li> <a href="/moodtracker" class="text-gray-700 hover:text-primary">Mood Tracker</a> </li> <li> <a href="/secours-app" class="text-gray-700 hover:text-primary">Kit de secours</a> </li> </ul> </nav> <div class="relative group"> <a href="/profil" class="flex items-center space-x-2 focus:outline-none"> <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"> ${userData?.pseudo_utilisateur?.charAt(0) || userData?.email?.charAt(0) || "?"} </div> <span class="hidden md:inline">${userData?.pseudo_utilisateur || userData?.email}</span> </a> <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block"> <a href="/profil/parametres" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a> <button id="logout-button" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
Se déconnecter
</button> </div> </div> </div> <!-- Mobile menu button --> <button class="group relative z-20 flex h-6 w-8 flex-col justify-between self-center *:h-[2px] *:w-full *:bg-[var(--color-primary)] *:transition-all *:duration-300 *:ease md:hidden" id="menu-btn" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[10.5px] group-aria-expanded:rotate-45 group-aria-expanded:bg-[var(--color-primary)]"></span> <span class="group-aria-expanded:opacity-0"></span> <span class="group-aria-expanded:-translate-y-[10.5px] group-aria-expanded:-rotate-45 group-aria-expanded:bg-[var(--color-primary)]"></span> </button> <!-- Mobile menu --> <nav class="visible fixed z-10 inset-0 text-xl font-bold text-[var(--color-primary)] opacity-100 transition-all duration-300 ease-in-out aria-hidden:invisible aria-hidden:opacity-0 bg-white" id="menu" aria-hidden="true"> <!-- User info in mobile menu --> <div class="flex justify-between items-center px-6 pt-4 pb-4"> <a href="/profil" class="flex items-center"> <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg"> ${userData?.pseudo_utilisateur?.charAt(0) || userData?.email?.charAt(0) || "?"} </div> <div class="ml-3"> <p class="font-semibold text-base"> ${userData?.pseudo_utilisateur || userData?.email} </p> <p class="text-xs">
Utilisateur ${userData?.is_volunteer ? "b\xE9n\xE9vole" : ""} </p> </div> </a> <!-- Placeholder pour aligner avec le bouton de menu qui reste fixe --> <div class="w-8"></div> </div> <ul class="mt-15 w-full"> <li> <a class="block pl-28 py-3 mb-8 relative overflow-hidden group" href="/accueil-app"> <span class="relative z-10 text-[var(--color-primary)] group-hover:text-white">Accueil</span> <span class="absolute inset-0 bg-[var(--color-primary)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span> </a> </li> <li> <a class="block pl-28 py-3 mb-8 relative overflow-hidden group" href="/messages"> <span class="relative z-10 text-[var(--color-primary)] group-hover:text-white">Messagerie</span> <span class="absolute inset-0 bg-[var(--color-primary)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span> </a> </li> <li> <a class="block pl-28 py-3 mb-8 relative overflow-hidden group" href="/moodtracker"> <span class="relative z-10 text-[var(--color-primary)] group-hover:text-white">Mood Tracker</span> <span class="absolute inset-0 bg-[var(--color-primary)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span> </a> </li> <li> <a class="block pl-28 py-3 mb-8 relative overflow-hidden group" href="/secours-app"> <span class="relative z-10 text-[var(--color-primary)] group-hover:text-white">Kit de secours</span> <span class="absolute inset-0 bg-[var(--color-primary)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span> </a> </li> <li> <a class="block pl-28 py-3 mb-8 relative overflow-hidden group" href="/profil/parametres"> <span class="relative z-10 text-[var(--color-primary)] group-hover:text-white">Paramètres</span> <span class="absolute inset-0 bg-[var(--color-primary)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span> </a> </li> <li> <button id="mobile-logout-button" class="block w-full text-left pl-28 py-3 mb-8 relative overflow-hidden group"> <span class="relative z-10 text-red-600 group-hover:text-white">Se déconnecter</span> <span class="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span> </button> </li> </ul> </nav> </header> ${renderScript($$result, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Headerapp.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Headerapp.astro", void 0);

const $$Astro$1 = createAstro("https://echosafe.eloishenry.fr/");
const $$Menuapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menuapp;
  const pathname = Astro2.url.pathname;
  const isMessagePage = pathname.includes("/messages/") && (pathname.includes("/aide/") || pathname.includes("/prives/"));
  return renderTemplate`${!isMessagePage && renderTemplate`${maybeRenderHead()}<div class="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-lg border-t border-gray-300"><div class="max-w-md mx-auto flex justify-between items-center px-10 py-4"><a href="/messages" class="flex flex-col items-center text-indigo-700 hover:text-indigo-900 transition"><img src="/src/assets/iconediscussion.svg" alt="Discussions" class="w-7 h-7 mb-1"></a><a href="/accueil-app" class="flex flex-col items-center text-indigo-700 hover:text-indigo-900 transition"><img src="/src/assets/iconehome.svg" alt="Accueil" class="w-7 h-7 mb-1"></a><a href="/profil" class="flex flex-col items-center text-indigo-700 hover:text-indigo-900 transition"><img src="/src/assets/iconeprofil.svg" alt="Profil" class="w-7 h-7 mb-1"></a></div></div>`}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Menuapp.astro", void 0);

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Layoutapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layoutapp;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body class=""> ${renderComponent($$result, "Headerapp", $$Headerapp, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Menuapp", $$Menuapp, {})} </body></html>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/layouts/Layoutapp.astro", void 0);

export { $$Layoutapp as $ };
