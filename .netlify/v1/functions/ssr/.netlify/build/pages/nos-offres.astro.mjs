import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6NBKjMwL.mjs';
import { $ as $$Button } from '../chunks/Button_CX8buZ86.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_BWM0UJlC.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const Jeune = new Proxy({"src":"/_astro/jeune_offres.0Q1r6IbM.webp","width":1156,"height":1192,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/assets/jeune_offres.webp";
							}
							
							return target[name];
						}
					});

const Adulte = new Proxy({"src":"/_astro/adulte_offres.BIITkrRh.webp","width":1090,"height":1432,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/assets/adulte_offres.webp";
							}
							
							return target[name];
						}
					});

const Association = new Proxy({"src":"/_astro/association_offres.CIm0DW_u.webp","width":8192,"height":5460,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/assets/association_offres.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pt-5 py-8 md:py-0"> <div class="w-80 container mx-auto px-4"> ${renderComponent($$result2, "Image", $$Image, { "src": Jeune, "alt": "Jeune offres" })} </div> <div class="flex flex-col items-center justify-center text-center"> <h1 class="text-3xl font-bold mb-4 font-secondary">
Echo Safe est gratuit pour les jeunes sans aucune limite
</h1> <p class="mb-4">
Echo Safe est gratuit pour les jeunes de moins de 20 ans, sans aucune
        limite. Profitez d'un espace sécurisé pour discuter, recevoir du
        soutien, et utiliser des outils comme le Moodtracker.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "class": "mt-4", "variant": "dark" }, { "default": ($$result3) => renderTemplate`
Accéder à Echo Safe
` })} </div> </div> </div> <div style="background-color: #E6E2FF;" class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 md:py-0"> <div class="flex flex-col items-center justify-center text-center order-2 md:order-1"> <h2 class="text-3xl font-bold mb-4 font-secondary">
Seulement à 4,99€ par mois pour les adultes
</h2> <p class="mb-4">
Pour 4,99 €/mois, accédez à toutes les fonctionnalités d'Echo Safe :
        espace sécurisé, soutien pro, et outils comme le Moodtracker pour votre
        bien-être mental.
</p> <div class="flex flex-col items-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "class": "mt-4", "variant": "dark" }, { "default": ($$result3) => renderTemplate`
Démarrer l'essai gratuit
` })} <p class="text-sm mt-2">
7 jours d'essai gratuit. Annulable à tout moment
</p> </div> </div> <div class="w-80 container mx-auto px-4 flex items-center justify-center order-1 md:order-2"> ${renderComponent($$result2, "Image", $$Image, { "src": Adulte, "alt": "Adulte offres", "width": 578, "height": 596 })} </div> </div> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-7"> <div class="container mx-auto px-4 flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Association, "alt": "Association offres", "width": 500, "height": 514, "class": "w-auto h-auto max-w-md" })} </div> <div class="flex flex-col items-center justify-center text-center"> <h1 class="text-3xl font-bold mb-4 font-secondary">
Partenariat gratuit pour les associations
</h1> <p class="mb-4">
Echo Safe propose un partenariat gratuit aux associations engagées dans
        le soutien psychologique. Rejoignez-nous pour valoriser vos actions,
        élargir votre portée et agir ensemble.
</p> <ul class="mb-6 text-left space-y-2"> <li class="flex items-center"> <svg class="w-5 h-5 text-color-primary mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Visibilité sur notre plateforme sans frais</span> </li> <li class="flex items-center"> <svg class="w-5 h-5 text-color-primary mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Impact communautaire renforcé</span> </li> </ul> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "class": "mt-4", "variant": "dark" }, { "default": ($$result3) => renderTemplate`
Devenir partenaire
` })} </div> </div> </div> ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/nos-offres/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/nos-offres/index.astro";
const $$url = "/nos-offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
