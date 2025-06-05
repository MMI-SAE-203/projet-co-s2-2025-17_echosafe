import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../chunks/Layoutapp_5LaSD89_.mjs';
import PocketBase from 'pocketbase';
import { $ as $$Button } from '../chunks/Button_CX8buZ86.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  if (!pb.authStore.isValid) {
    return Astro2.redirect("/auth/connexion");
  }
  const user = pb.authStore.model;
  const moodIcons = [
    { name: "Tr\xE8s heureux", svg: "/src/assets/moodtracker/tres_heureux.svg" },
    { name: "Heureux", svg: "/src/assets/moodtracker/heureux.svg" },
    { name: "Blas\xE9", svg: "/src/assets/moodtracker/blase.svg" },
    { name: "Triste", svg: "/src/assets/moodtracker/triste.svg" },
    { name: "Col\xE8re", svg: "/src/assets/moodtracker/colere.svg" },
    { name: "Anxieux", svg: "/src/assets/moodtracker/anxieux.svg" },
    {
      name: "Au bord des larmes",
      svg: "/src/assets/moodtracker/au-bord-des-larmes.svg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "AppLayout", $$Layoutapp, { "title": "EchoSafe - Accueil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="mb-5"> <h1 class="text-3xl font-bold text-primary">
Hello, ${user.pseudo || "utilisateur"} !
</h1> <p class="mt-2">Tu avances à ton rythme, continue !</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"> <div class="bg-white rounded-lg shadow-md p-6 w-full"> <div class="flex items-center mb-4"> <h2 class="text-xl font-semibold">
Comment te sens-tu aujourd'hui ?
</h2> </div> <div class="flex justify-between items-center mb-4"> ${moodIcons.map((mood) => renderTemplate`<div class="flex flex-col items-center"> <img${addAttribute(mood.svg, "src")}${addAttribute(mood.name, "alt")} class="w-10 h-10 object-contain" onerror="this.onerror=null; this.src='/favicon.svg';"> </div>`)} </div> <div class="h-2 w-full rounded-full overflow-hidden mb-2 flex gap-1"> <div class="bg-green-400 flex-1"></div> <div class="bg-yellow-400 flex-1"></div> <div class="bg-orange-400 flex-1"></div> <div class="bg-pink-400 flex-1"></div> <div class="bg-red-400 flex-1"></div> <div class="bg-purple-400 flex-1"></div> <div class="bg-blue-400 flex-1"></div> </div> <div class="flex justify-center mt-5"> ${renderComponent($$result2, "Button", $$Button, { "variant": "dark", "size": "medium", "url": "/moodtracker", "text": "Mon MoodTracker" })} </div> </div> <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 w-full"> <div class="flex items-center mb-4"> <div class="bg-primary/10 p-3 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path> <circle cx="12" cy="12" r="0.2" fill="currentColor"></circle> <circle cx="16" cy="12" r="0.2" fill="currentColor"></circle> <circle cx="8" cy="12" r="0.2" fill="currentColor"></circle> </svg> </div> <h2 class="text-xl font-semibold ml-3">Messagerie</h2> </div> <p class="text-gray-600 mb-4">
Discutez avec des aidants bénévoles ou d'autres utilisateurs.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "dark", "size": "medium", "url": "/messages", "text": "Ma Messagerie" })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/accueil-app/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/accueil-app/index.astro";
const $$url = "/accueil-app";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
