import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6NBKjMwL.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"> <div class="max-w-4xl mx-auto w-full"> <!-- Titre plus compact --> <div class="text-center mb-6"> <h1 class="font-secondary text-xl md:text-5xl font-bold">Bienvenue</h1> <p class="mt-2 text-base md:text-lg">
Connectez-vous ou créez un compte pour accéder à toutes nos
          fonctionnalités
</p> </div> <!-- Cartes dans un conteneur flex plus adaptatif --> <div class="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center"> <!-- Carte Connexion - Plus compacte --> <div class="bg-white overflow-hidden shadow rounded-lg w-full sm:w-1/2"> <div class="px-4 py-4 md:py-6"> <div class="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#FFE3FA] mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-[#323F92]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path> </svg> </div> <div class="mt-4 text-center"> <h3 class="text-lg font-medium">Déjà inscrit?</h3> <p class="mt-1 text-sm md:text-base">
Connectez-vous pour accéder à vos services.
</p> <div class="mt-4"> <a href="/auth/connexion" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-3xl text-white bg-[#323F92] hover:bg-white hover:text-[#323F92] hover:border-[#323F92] transition-colors duration-300 ease-in-out">
Se connecter
</a> </div> </div> </div> <div class="px-4 py-2 bg-gray-50"> <div class="text-xs md:text-sm text-center"> <a href="/mot-de-passe-oublie" class="font-medium">
Mot de passe oublié?
</a> </div> </div> </div> <!-- Carte Inscription - Plus compacte --> <div class="bg-white overflow-hidden shadow rounded-lg w-full sm:w-1/2"> <div class="px-4 py-4 md:py-6"> <div class="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#FFE3FA] mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7 text-[#323F92]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path> </svg> </div> <div class="mt-4 text-center"> <h3 class="text-lg font-medium">Nouveau utilisateur?</h3> <p class="mt-1 text-sm md:text-base">
Créez un compte pour une expérience personnalisée.
</p> <div class="mt-4"> <a href="/auth/inscription" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-3xl text-white bg-[#323F92] hover:bg-white hover:text-[#323F92] hover:border-[#323F92] transition-colors duration-300 ease-in-out">
Créer un compte
</a> </div> </div> </div> <div class="px-4 py-2 bg-gray-50"> <div class="text-xs md:text-sm text-center"> <p>L'inscription prend moins d'une minute</p> </div> </div> </div> </div> <!-- Section des connexions sociales - Plus compacte --> <div class="mt-8 text-center"> <div class="relative"> <div class="absolute inset-0 flex items-center"> <div class="w-full border-t border-gray-300"></div> </div> <div class="relative flex justify-center text-xs md:text-sm"> <span class="px-2 bg-white text-gray-500">Ou continuer avec</span> </div> </div> <div class="mt-4 flex justify-center space-x-4"> <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm md:text-base font-medium rounded-md bg-white hover:bg-gray-50"> <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path> </svg>
Google
</a> <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm md:text-base font-medium rounded-md bg-white hover:bg-gray-50"> <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M24,12.073c0,-5.8 -4.701,-10.5 -10.5,-10.5s-10.5,4.7 -10.5,10.5c0,5.24 3.84,9.584 8.86,10.373v-7.337h-2.666v-3.036h2.666v-2.314c0,-2.633 1.568,-4.086 3.966,-4.086c1.15,0 2.351,0.205 2.351,0.205v2.585h-1.324c-1.304,0 -1.711,0.81 -1.711,1.64v1.97h2.912l-0.465,3.036h-2.447v7.337c5.02,-0.788 8.859,-5.131 8.859,-10.373Z"></path> </svg>
Facebook
</a> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/index.astro";
const $$url = "/auth";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
