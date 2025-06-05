import { a as createComponent, e as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_6NBKjMwL.mjs';
/* empty css                                           */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Remerciement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ibvln3ob": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12" data-astro-cid-ibvln3ob> <div class="w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center" data-astro-cid-ibvln3ob> <div class="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6" data-astro-cid-ibvln3ob> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ibvln3ob> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ibvln3ob></path> </svg> </div> <h1 class="text-3xl font-bold text-primary mb-6 font-secondary" data-astro-cid-ibvln3ob>
Merci pour votre don !
</h1> <p class="text-gray-600 mb-4 text-lg" data-astro-cid-ibvln3ob>
Votre générosité nous permet de continuer à développer EchoSafe et à
        offrir un soutien aux personnes qui en ont besoin.
</p> <p class="text-gray-600 mb-8 text-lg" data-astro-cid-ibvln3ob>
Votre contribution fait une réelle différence dans notre mission d'aide
        et de soutien.
</p> <div class="mt-8" data-astro-cid-ibvln3ob> <a href="/" class="inline-block w-full px-6 py-3 bg-primary text-white text-center rounded-3xl hover:bg-white hover:text-primary border border-primary transition-colors duration-300" data-astro-cid-ibvln3ob>
Retour à l'accueil
</a> </div> </div> <!-- Animation confettis --> <div id="confetti-container" class="fixed inset-0 pointer-events-none z-50" data-astro-cid-ibvln3ob></div> </div> ` })} ${renderScript($$result, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/don/remerciement.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/don/remerciement.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/don/remerciement.astro";
const $$url = "/don/remerciement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Remerciement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
