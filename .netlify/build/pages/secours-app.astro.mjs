import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../chunks/Layoutapp_5LaSD89_.mjs';
/* empty css                                 */
import 'clsx';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Cardsecour = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardsecour;
  const {
    size = "medium",
    url = "#",
    text = "",
    imgSrc = "",
    alt = "",
    bgColor = "transparent",
    borderClass = "border-1 border-[var(--color-primary)]"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`flex justify-between items-center h-[60px] px-4 py-2 text-[var(--color-primary)] ${borderClass} font-normal rounded-xl shadow-md transition duration-300 ease-in-out mb-5`, "class")}${addAttribute(`background-color: ${bgColor};`, "style")}> <span class="text-left"> ${text} </span> ${imgSrc && renderTemplate`<img${addAttribute(imgSrc, "src")}${addAttribute(alt, "alt")} class="w-8 h-8">`} </a>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Cardsecour.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layoutapp", $$Layoutapp, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-5"> <div class="container"> <h1 class="font-bold justify-center text-center mt-5 text-primary mb-5">
Kit de secours
</h1> <p class="font-bold text-primary mb-5">Numéros d'urgence vitale</p> </div> ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:112`, "text": `Si urgence vitale, appeler le 112`, "imgSrc": "src/assets/icone112.svg", "alt": "girophare pour le 112" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:17`, "text": `Police secours, appeler le 17`, "imgSrc": "src/assets/iconepolice.svg", "alt": "voiture de police" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:15`, "text": `SAMU, appeler le 15`, "imgSrc": "src/assets/iconeambulance.svg", "alt": "v\xE9hicule de secours et d'assistance aux victimes" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:18`, "text": `Pompier, appeler le 18`, "imgSrc": "src/assets/iconepompier.svg", "alt": "camion de pompier" })} <p class="font-bold text-primary mb-5">Numéros d'urgence</p> ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:18`, "text": `SOS Amiti\xE9\xA0: 09 72 39 40 50`, "imgSrc": "src/assets/iconephone.svg", "alt": "icone de t\xE9l\xE9phone" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:18`, "text": `Fil Sant\xE9 Jeunes\xA0: 0800 235 236`, "imgSrc": "src/assets/iconephone.svg", "alt": "icone de t\xE9l\xE9phone" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:3919`, "text": `Violences Femmes Info\xA0: 3919`, "imgSrc": "src/assets/iconephone.svg", "alt": "icone de t\xE9l\xE9phone" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:119`, "text": `Enfance en Danger\xA0: 119`, "imgSrc": "src/assets/iconephone.svg", "alt": "icone de t\xE9l\xE9phone" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:31140`, "text": `Pr\xE9vention suicide : 31140`, "imgSrc": "src/assets/iconephone.svg", "alt": "icone de t\xE9l\xE9phone" })} <div> <h2 class="font-bold font-primary text-xl mb-3 text-primary">
Conseils Pratiques
</h2> <ul class="text-primary font-primary text-lg mb-3"> <li class="mb-3"> <strong>En cas de harcèlement : </strong>Notez les incidents et
          contactez un adulte de confiance.
</li> <li class="mb-3"> <strong>Pour aider quelqu'un : </strong>Écoutez sans juger et
          encouragez à chercher de l'aide.
</li> <li class="mb-3"> <strong>Sécurité en ligne :</strong> Utilisez des mots de passe forts et
          signalez tout comportement inapproprié.
</li> </ul> </div> <div class="mb-22"> <h2 class="font-bold
    font-primary
    text-xl mb-4 mt-4 text-primary">
Ressources en ligne
</h2> ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `tel:3018`, "text": `Net \xE9coute : 
 3018`, "imgSrc": "src/assets/iconemonde.svg", "bgColor": "#E2EEFF", "borderClass": "transparent", "alt": "icone de plan\xE8te pour parler de la communication dans le monde" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `https://e-enfance.org/`, "text": `e-Enfance : Protection des enfants en ligne `, "imgSrc": "src/assets/iconemonde.svg", "bgColor": "#E6E2FF", "borderClass": "transparent", "alt": "icone de plan\xE8te pour parler de la communication dans le monde" })} ${renderComponent($$result2, "Cardsecour", $$Cardsecour, { "url": `https://www.education.gouv.fr/non-au-harcelement`, "text": `Stop Harc\xE8lement : Ressource harc\xE8lement scolaire `, "imgSrc": "src/assets/iconemonde.svg", "bgColor": "#FFDEDE", "borderClass": "transparent", "alt": "icone de plan\xE8te pour parler de la communication dans le monde" })} </div> </div> ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/secours-app/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/secours-app/index.astro";
const $$url = "/secours-app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
