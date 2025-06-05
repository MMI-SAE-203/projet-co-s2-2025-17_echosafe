import { c as createAstro, a as createComponent, e as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../../chunks/Layoutapp_5LaSD89_.mjs';
import PocketBase from 'pocketbase';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Parametres = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Parametres;
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  if (!pb.authStore.isValid) {
    return Astro2.redirect("/auth/connexion");
  }
  return renderTemplate`${renderComponent($$result, "Layoutapp", $$Layoutapp, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-12"> <div class="flex items-center mb-10"> <a href="/profil" class="mr-3 hover:opacity-80 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a> <h1 class="text-2xl font-bold">Paramètres</h1> </div> <section class="mb-12"> <h2 class="text-xl font-semibold mb-6 border-b pb-2">Confidentialité</h2> <div class="space-y-6 pl-1"> <div class="flex items-center justify-between"> <div> <p class="font-medium">Profil privé</p> <p class="text-sm text-primary mt-1">
Seuls les aidants peuvent voir votre profil
</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="private-profile" class="sr-only peer"> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div> </label> </div> <div class="py-2"> <a href="/legal/politique-confidentialite" class="hover:underline inline-block">
Politique de confidentialité
</a> </div> <div class="py-2"> <a href="/legal/politique-cookies" class="hover:underline inline-block">
Gestion des cookies
</a> </div> </div> </section> <section class="mb-12"> <h2 class="text-xl font-semibold mb-6 border-b pb-2">Sécurité</h2> <div class="space-y-6 pl-1"> <div class="py-2"> <button id="change-password-btn" class="hover:underline text-left">
Changer mon mot de passe
</button> </div> </div> </section> <section class="mt-16 text-center"> <div class="py-2"> <button id="logout-btn" class="text-red-500 hover:text-red-700 font-bold text-base">
Se déconnecter
</button> </div> </section> </div> ` })} ${renderScript($$result, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/parametres.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/parametres.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/parametres.astro";
const $$url = "/profil/parametres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Parametres,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
