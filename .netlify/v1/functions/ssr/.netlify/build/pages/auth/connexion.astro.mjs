import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_6NBKjMwL.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center min-h-screen py-8"> <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100"> <h1 class="text-3xl font-bold mb-6 text-center text-primary font-secondary">
Connexion
</h1> <form id="login-form" class="space-y-4"> <div class="form-group"> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition" placeholder="votre@email.com"> <span class="error-message text-sm text-red-500 hidden" data-for="email"></span> </div> <div class="form-group"> <label for="password" class="block text-sm font-medium mb-1">Mot de passe</label> <div class="relative"> <input type="password" id="password" name="password" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition" placeholder="Votre mot de passe"> <button type="button" id="toggle-password" class="absolute right-3 top-3 hover:text-primary" aria-label="Afficher/masquer le mot de passe"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </button> </div> <div class="flex justify-end"> <a href="/auth/mot-de-passe-oublie" class="text-sm text-primary hover:text-primary/80 mt-1">Mot de passe oublié?</a> </div> <span class="error-message text-sm text-red-500 hidden" data-for="password"></span> </div> <div class="flex items-center mt-2"> <input type="checkbox" id="remember-me" name="remember-me" class="h-4 w-4 text-primary focus:ring-primary/30 border-gray-300 rounded"> <label for="remember-me" class="ml-2 block text-sm">
Se souvenir de moi
</label> </div> <button type="submit" id="submit-button" class="w-full bg-primary text-white py-3 px-4 rounded-3xl hover:bg-white hover:text-primary border border-primary transition-colors duration-300 mt-6"> <span id="button-text">Se connecter</span> <span id="button-loader" class="hidden"> <svg class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </span> </button> <div id="message" class="mt-4 text-center hidden p-3 rounded-md"></div> </form> <div class="mt-6 text-center text-sm">
Pas encore de compte? <a href="/auth/inscription" class="hover:underline font-medium">S'inscrire</a> </div> <!-- Séparateur pour les connexions sociales --> <div class="mt-6"> <div class="relative"> <div class="absolute inset-0 flex items-center"> <div class="w-full border-t border-gray-200"></div> </div> <div class="relative flex justify-center text-sm"> <span class="px-2 bg-white">Ou continuer avec</span> </div> </div> <div class="mt-6 grid grid-cols-2 gap-3"> <a href="#" class="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-3xl shadow-sm text-sm font-medium bg-white hover:bg-gray-50 transition-colors duration-300"> <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <!-- Icône Google simplifiée --> <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path> </svg>
Google
</a> <a href="#" class="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-3xl shadow-sm text-sm font-medium bg-white hover:bg-gray-50 transition-colors duration-300"> <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <!-- Icône Facebook simplifiée --> <path d="M24,12.073c0,-5.8 -4.701,-10.5 -10.5,-10.5s-10.5,4.7 -10.5,10.5c0,5.24 3.84,9.584 8.86,10.373v-7.337h-2.666v-3.036h2.666v-2.314c0,-2.633 1.568,-4.086 3.966,-4.086c1.15,0 2.351,0.205 2.351,0.205v2.585h-1.324c-1.304,0 -1.711,0.81 -1.711,1.64v1.97h2.912l-0.465,3.036h-2.447v7.337c5.02,-0.788 8.859,-5.131 8.859,-10.373Z"></path> </svg>
Facebook
</a> </div> </div> </div> </div> ${renderScript($$result2, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/connexion.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/connexion.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/connexion.astro";
const $$url = "/auth/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Connexion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
