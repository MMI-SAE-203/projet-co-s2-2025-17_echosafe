import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_6NBKjMwL.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$MotDePasseOublie = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center min-h-screen py-8"> <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100"> <h1 class="text-3xl font-bold mb-6 text-center text-primary font-secondary">
Mot de passe oublié
</h1> <div id="step-email" class="block"> <p class="text-gray-600 mb-6 text-center">
Entrez votre adresse email et nous vous enverrons un lien pour
          réinitialiser votre mot de passe.
</p> <form id="forgot-password-form" class="space-y-4"> <div class="form-group"> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:outline-none transition" placeholder="votre@email.com"> <span class="error-message text-sm text-red-500 hidden" data-for="email"></span> </div> <button type="submit" id="submit-button" class="hover:cursor-pointer w-full bg-primary text-white py-3 px-4 rounded-3xl hover:bg-white hover:text-primary border border-primary transition-colors duration-300 mt-2"> <span id="button-text">Envoyer le lien</span> <span id="button-loader" class="hidden"> <svg class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </span> </button> <div id="message" class="mt-4 text-center hidden p-3 rounded-md"></div> </form> </div> <div id="step-success" class="hidden text-center"> <div class="text-5xl mb-6 text-green-500">✓</div> <h2 class="text-2xl font-bold mb-4">Email envoyé</h2> <p class="text-gray-600 mb-6">
Si un compte existe avec cette adresse email, vous recevrez un lien
          pour réinitialiser votre mot de passe. Vérifiez votre boîte de
          réception et vos spams.
</p> <div id="email-sent-to" class="font-medium text-gray-800 mb-6"></div> <button id="resend-link" class="hover:cursor-pointer w-full bg-primary text-white py-3 px-4 rounded-3xl hover:bg-white hover:text-primary border border-primary transition-colors duration-300">
Renvoyer le lien
</button> </div> <div class="mt-2 text-center text-sm"> <a href="/auth/connexion" class="text-primary hover:underline font-medium">Retour à la connexion</a> </div> </div> </div> ${renderScript($$result2, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/mot-de-passe-oublie.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/mot-de-passe-oublie.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/auth/mot-de-passe-oublie.astro";
const $$url = "/auth/mot-de-passe-oublie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MotDePasseOublie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
