import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DviQv69v.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$LegalNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegalNav;
  const { currentPage } = Astro2.props;
  const pages = [
    { name: "Mentions l\xE9gales", path: "/legal/mentions-legales" },
    {
      name: "Politique de confidentialit\xE9",
      path: "/legal/politique-confidentialite"
    },
    { name: "Conditions d'utilisation", path: "/legal/conditions" },
    { name: "Politique de cookies", path: "/legal/politique-cookies" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 rounded-lg p-4 mb-8"> <h3 class="font-secondary text-lg font-semibold mb-3 text-primary">
Documentation légale
</h3> <div class="flex flex-wrap gap-2"> ${pages.map((page) => renderTemplate`<a${addAttribute(page.path, "href")}${addAttribute(`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${currentPage === page.path ? "bg-primary text-white font-medium" : "bg-white border border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary"}`, "class")}> ${page.name} </a>`)} </div> </div>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/LegalNav.astro", void 0);

export { $$LegalNav as $ };
