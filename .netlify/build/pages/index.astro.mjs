import { a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent, c as createAstro } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6NBKjMwL.mjs';
/* empty css                                 */
import { $ as $$Button } from '../chunks/Button_CX8buZ86.mjs';
import 'clsx';
import { c as createSvgComponent } from '../chunks/logo_echosafe_DeMEOBng.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Partenaire = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    "/src/assets/logo-avf.webp",
    "/src/assets/logo-france.webp",
    "/src/assets/logo-3.webp",
    "/src/assets/logo4.webp",
    "/src/assets/logo_unicef.webp",
    "/src/assets/logo_tf1.webp",
    "/src/assets/logo_radiofrance.webp"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full relative bg-[#323F92] overflow-hidden py-4"> <div class="w-max animate-[scroll_30s_linear_infinite] flex gap-12"> ${logos.concat(logos).map((logo, index) => renderTemplate`<img${addAttribute(logo, "src")}${addAttribute(`Logo Partenaire ${index + 1}`, "alt")} class="h-8 lg:h-12 inline-block">`)} </div> </div>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Partenaire.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center -mt-18"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center px-6 w-full"> <!-- Texte --> <div class="flex flex-col justify-center items-center text-center space-y-30 md:space-y-6 w-full md:items-start md:text-left md:w-1/2 min-h-screen md:min-h-0"> <h1 class="font-secondary text-3xl md:text-5xl font-bold mt-30">
Un espace d'écoute et de soutien, en toute sécurité.
</h1> <h3 class="font-bold text-xl">
Vous n'êtes pas seul(e). Echo Safe offre un espace sécurisé pour les
        victimes de harcèlement, avec écoute, soutien, et accès à des
        professionnels.
</h3> <div class="flex flex-col md:flex-row gap-4 items-center md:items-start"> ${renderComponent($$result, "Button", $$Button, { "variant": "dark", "url": `/accueil-app`, "text": `Acc\xE9der \xE0 Echo Safe` })} ${renderComponent($$result, "Button", $$Button, { "url": `/auth/inscription`, "text": `S'inscrire` })} </div> </div> <!-- Images (cachées sur mobile) --> <div class="relative hidden md:block md:w-1/2"> <img class="w-120 absolute -translate-y-45 z-0 translate-x-10" src="/src/assets/onde.webp" alt="fond en forme d'onde"> <img src="/src/assets/femme_hero.webp" alt="femme discute" class="absolute top-1/2 left-1/2 transform -translate-x-55 -translate-y-50 w-80"> <img src="/src/assets/humeurs.webp" alt="cadrant d'humeurs" class="absolute transform left-1/2 -top-10 w-65"> </div> </div> </section> ${renderComponent($$result, "Partenaire", $$Partenaire, {})}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://echosafe.eloishenry.fr/");
const $$CardAccueil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardAccueil;
  const {
    title,
    description,
    buttonText,
    buttonLink,
    imageUrl,
    bgColor,
    textColor,
    imagePosition = "right",
    layout = "horizontal",
    bgGradient = ""
  } = Astro2.props;
  const backgroundClass = bgGradient || bgColor;
  const isImageLeft = imagePosition === "left";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-3xl overflow-hidden p-10 my-4 lg:mx-1 ${backgroundClass}`, "class")}> <div${addAttribute(`flex flex-col items-center gap-6 
      ${imageUrl ? "md:flex-row" : "justify-center text-center"}
    `, "class")}> ${imageUrl && renderTemplate`<div${addAttribute(`w-full md:w-1/3 flex justify-center
          ${layout === "horizontal" ? isImageLeft ? "md:order-1" : "md:order-2" : ""}
          order-2
        `, "class")}> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="max-h-80"> </div>`} <div${addAttribute(`w-full ${imageUrl ? "md:w-2/3" : ""} flex flex-col ${textColor}
        ${layout === "horizontal" && imageUrl ? isImageLeft ? "md:order-2" : "md:order-1" : ""}
        order-1
        items-center text-center
      `, "class")}> <h3 class="text-xl md:text-2xl font-bold mb-3 font-secondary">${title}</h3> <p class="mb-4">${description}</p> <div class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "variant": "dark", "href": buttonLink }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> </div> </div>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Card_accueil.astro", void 0);

const starSvg = createSvgComponent({"meta":{"src":"/_astro/etoile.CGWiu5f6.svg","width":44,"height":41,"format":"svg"},"attributes":{"width":"44","height":"41","viewBox":"0 0 44 41","fill":"none"},"children":"\r\n<path d=\"M40.9991 13.61L30.4991 12.6266C29.4991 12.6266 28.7491 11.889 28.4991 11.1515L24.4991 1.56346C23.7491 -0.403316 20.7491 -0.403316 19.9991 1.56346L15.4991 11.3974C15.2491 12.1349 14.4991 12.6266 13.4991 12.8724L2.99914 13.61C0.749139 13.8558 -0.000861526 16.5601 1.49914 18.0352L9.49914 24.9189C10.2491 25.4106 10.4991 26.394 10.2491 27.3774L7.74914 37.4572C7.24914 39.6698 9.49914 41.1449 11.4991 40.1615L20.4991 34.7528C21.2491 34.2611 22.2491 34.2611 22.9991 34.7528L31.9991 40.1615C33.9991 41.3907 36.2491 39.6698 35.7491 37.4572L33.2491 27.3774C32.9991 26.394 33.2491 25.6565 33.9991 24.9189L41.9991 18.0352C44.2491 16.5601 43.2491 13.8558 40.9991 13.61ZM21.9991 29.3442L12.4991 34.9987L14.9991 24.4273L6.74914 17.2977L17.7491 16.3143L21.9991 6.48041L26.2491 16.3143L37.2491 17.2977L28.9991 24.4273L31.4991 34.9987L21.9991 29.3442Z\" fill=\"#F7A530\" />\r\n<path d=\"M21.9991 29.3442L12.4991 34.9987L14.9991 24.4273L6.74914 17.2977L17.7491 16.3143L21.9991 6.48041L26.2491 16.3143L37.2491 17.2977L28.9991 24.4273L31.4991 34.9987L21.9991 29.3442Z\" fill=\"#F7A530\" />\r\n"});

const starEmptySvg = createSvgComponent({"meta":{"src":"/_astro/etoile-vide.DtjfrZwj.svg","width":44,"height":41,"format":"svg"},"attributes":{"width":"44","height":"41","viewBox":"0 0 44 41","fill":"none"},"children":"\r\n<path d=\"M40.9991 13.61L30.4991 12.6266C29.4991 12.6266 28.7491 11.889 28.4991 11.1515L24.4991 1.56346C23.7491 -0.403316 20.7491 -0.403316 19.9991 1.56346L15.4991 11.3974C15.2491 12.1349 14.4991 12.6266 13.4991 12.8724L2.99914 13.61C0.749139 13.8558 -0.000861526 16.5601 1.49914 18.0352L9.49914 24.9189C10.2491 25.4106 10.4991 26.394 10.2491 27.3774L7.74914 37.4572C7.24914 39.6698 9.49914 41.1449 11.4991 40.1615L20.4991 34.7528C21.2491 34.2611 22.2491 34.2611 22.9991 34.7528L31.9991 40.1615C33.9991 41.3907 36.2491 39.6698 35.7491 37.4572L33.2491 27.3774C32.9991 26.394 33.2491 25.6565 33.9991 24.9189L41.9991 18.0352C44.2491 16.5601 43.2491 13.8558 40.9991 13.61ZM21.9991 29.3442L12.4991 34.9987L14.9991 24.4273L6.74914 17.2977L17.7491 16.3143L21.9991 6.48041L26.2491 16.3143L37.2491 17.2977L28.9991 24.4273L31.4991 34.9987L21.9991 29.3442Z\" fill=\"#BDC5D1\" />\r\n<path d=\"M21.9991 29.3442L12.4991 34.9987L14.9991 24.4273L6.74914 17.2977L17.7491 16.3143L21.9991 6.48041L26.2491 16.3143L37.2491 17.2977L28.9991 24.4273L31.4991 34.9987L21.9991 29.3442Z\" fill=\"#BDC5D1\" />\r\n"});

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$TemoignageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TemoignageCard;
  const { name, rating, content } = Astro2.props;
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl p-6 shadow-md"> <!-- En-tête avec nom et étoiles --> <div class="flex justify-between items-center mb-4"> <h4 class="font-medium">${name}</h4> <div class="flex"> ${stars.map((isFilled) => renderTemplate`<img${addAttribute(isFilled ? starSvg.src : starEmptySvg.src, "src")}${addAttribute(isFilled ? "\xC9toile pleine" : "\xC9toile vide", "alt")} class="w-4 h-4">`)} </div> </div> <!-- Contenu du témoignage --> <p class="text-gray-700">${content}</p> </div>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/TemoignageCard.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$FAQItem = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    {
      question: "Qu'est-ce qu'Echo Safe ?",
      answer: "Echo Safe est une plateforme s\xE9curis\xE9e d\xE9di\xE9e aux victimes de harc\xE8lement, offrant un espace pour \xE9changer, recevoir du soutien, et acc\xE9der \xE0 des ressources adapt\xE9es."
    },
    {
      question: "Comment fonctionne l'anonymat sur Echo Safe ?",
      answer: "L'anonymat est garanti sur Echo Safe pour prot\xE9ger votre identit\xE9. Vous pouvez participer aux discussions publiques et priv\xE9es sans r\xE9v\xE9ler votre identit\xE9. Les messages sont chiffr\xE9s de bout en bout pour assurer la confidentialit\xE9 de vos \xE9changes."
    },
    {
      question: "Comment puis-je acc\xE9der au soutien professionnel ?",
      answer: "Vous pouvez acc\xE9der \xE0 un soutien professionnel en utilisant nos canaux de discussion priv\xE9s. Des professionnels qualifi\xE9s sont disponibles pour vous offrir des conseils et un soutien personnalis\xE9."
    },
    {
      question: "Comment fonctionne le syst\xE8me de r\xE9compenses ?",
      answer: "Notre syst\xE8me de r\xE9compenses vous permet de gagner des badges en accomplissant des d\xE9fis quotidiens et en participant activement \xE0 la communaut\xE9."
    },
    {
      question: "Quelles mesures de s\xE9curit\xE9 sont en place sur Echo Safe ?",
      answer: "Nous utilisons des API de filtrage et de mod\xE9ration, un chiffrement de bout en bout, une infra s\xE9curis\xE9e, et des audits r\xE9guliers pour garantir la s\xE9curit\xE9."
    },
    {
      question: "Comment puis-je signaler un probl\xE8me ou un comportement inappropri\xE9 ?",
      answer: "Utilisez notre syst\xE8me de signalement int\xE9gr\xE9. Notre \xE9quipe de mod\xE9ration examinera chaque signalement avec attention."
    },
    {
      question: "Comment puis-je contribuer \xE0 la communaut\xE9 Echo Safe ?",
      answer: "Participez aux discussions, partagez vos exp\xE9riences, soutenez les autres, ou faites un don pour aider au financement."
    },
    {
      question: "Comment puis-je supprimer mon compte ?",
      answer: "Dans les param\xE8tres de votre compte, vous trouverez une option pour supprimer votre compte. Le support peut aussi vous aider."
    },
    {
      question: "Comment puis-je obtenir de l'aide suppl\xE9mentaire ?",
      answer: "Consultez notre Kit de Secours ou contactez notre support utilisateur pour toute aide compl\xE9mentaire."
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="faq-container max-w-5xl mx-auto p-6 space-y-4" data-astro-cid-7h4h7iwu> ', ' </div> <script is:client>\n  document.addEventListener("DOMContentLoaded", () => {\n    const questions = document.querySelectorAll(".faq-question");\n\n    questions.forEach((btn) => {\n      btn.addEventListener("click", () => {\n        const answer = btn.nextElementSibling;\n        const icon = btn.querySelector(".faq-icon");\n        const isOpen = answer.classList.contains("active");\n\n        document.querySelectorAll(".faq-answer").forEach((el) => {\n          el.classList.remove("active");\n          el.style.maxHeight = "0px";\n          el.previousElementSibling.querySelector(".faq-icon").textContent =\n            "+";\n        });\n\n        if (!isOpen) {\n          answer.classList.add("active");\n          answer.style.maxHeight = answer.scrollHeight + "px";\n          icon.textContent = "-";\n        }\n      });\n    });\n  });\n<\/script> '])), maybeRenderHead(), faqItems.map((item, i) => renderTemplate`<div class="faq-item border border-gray-200 rounded-lg shadow-sm" data-astro-cid-7h4h7iwu> <button class="faq-question w-full bg-[#E2EEFF] p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition" data-astro-cid-7h4h7iwu> <span class="font-medium text-left" data-astro-cid-7h4h7iwu>${item.question}</span> <span class="faq-icon text-2xl font-bold" data-astro-cid-7h4h7iwu>+</span> </button> <div class="faq-answer bg-white max-h-0 overflow-hidden transition-all duration-300 ease-in-out" data-astro-cid-7h4h7iwu> <p class="p-4" data-astro-cid-7h4h7iwu>${item.answer}</p> </div> </div>`));
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/FAQItem.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Marie D.",
      rating: 5,
      content: "Gr\xE2ce aux canaux anonymes, j'ai pu partager mes exp\xE9riences et recevoir un soutien imm\xE9diat. La partie personnalis\xE9e m'a vraiment aid\xE9e."
    },
    {
      name: "Alexandre M.",
      rating: 5,
      content: "La mod\xE9ration et la s\xE9curit\xE9 des communications sur Echo Safe me permettent de discuter librement sans crainte pour ma confidentialit\xE9."
    },
    {
      name: "Sophie L.",
      rating: 5,
      content: "Le Kit de Secours est essentiel. Avoir acc\xE8s aux num\xE9ros d'urgence et conseils pratiques me rassure. L'application est facile \xE0 utiliser."
    },
    {
      name: "Julien C.",
      rating: 5,
      content: "Echo Safe est une vraie communaut\xE9. J'ai trouv\xE9 un soutien incroyable gr\xE2ce aux discussions anonymes et personnalis\xE9es."
    },
    {
      name: "\xC9milie T.",
      rating: 5,
      content: "L'anonymat et la bienveillance de la communaut\xE9 m'ont permis de m'ouvrir et de trouver des solutions \xE0 mes probl\xE8mes."
    },
    {
      name: "Thomas B.",
      rating: 5,
      content: "Le suivi d'humeur m'aide \xE0 identifier mes d\xE9clencheurs et \xE0 mieux g\xE9rer mon anxi\xE9t\xE9 quotidienne."
    },
    {
      name: "Laura M.",
      rating: 5,
      content: "Les ressources et conseils personnalis\xE9s sont vraiment adapt\xE9s \xE0 ma situation et m'aident \xE0 progresser."
    },
    {
      name: "Nicolas P.",
      rating: 5,
      content: "Excellent \xE9quilibre entre soutien professionnel et communautaire. Une aide de qualit\xE9 disponible en permanence."
    }
  ];
  const topRowTestimonials = testimonials.slice(0, 4);
  const bottomRowTestimonials = testimonials.slice(4, 8);
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  const CookieUtils = {\n    savePreferences: function (essential, functional, analytics) {\n      const expiryDate = new Date();\n      expiryDate.setFullYear(expiryDate.getFullYear() + 1);\n      const expires = "; expires=" + expiryDate.toUTCString();\n\n      document.cookie =\n        "cookies-preferences-set=true" + expires + "; path=/; SameSite=Lax";\n      document.cookie =\n        "cookies-essential=" + essential + expires + "; path=/; SameSite=Lax";\n      document.cookie =\n        "cookies-functional=" + functional + expires + "; path=/; SameSite=Lax";\n      document.cookie =\n        "cookies-analytics=" + analytics + expires + "; path=/; SameSite=Lax";\n    },\n    hasMadeChoice: function () {\n      return document.cookie.indexOf("cookies-preferences-set=true") > -1;\n    },\n  };\n\n  function setupTestimonialsAnimation() {\n    const container = document.getElementById("testimonials-container");\n    if (!container) return;\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            const topRow = container.querySelector(".top-row");\n            const bottomRow = container.querySelector(".bottom-row");\n\n            if (topRow && !topRow.classList.contains("animated")) {\n              topRow.classList.add("animated");\n              topRow.style.animation = "scrollLeft 30s linear infinite";\n              const content = topRow.innerHTML;\n              topRow.innerHTML = content + content;\n            }\n\n            if (bottomRow && !bottomRow.classList.contains("animated")) {\n              bottomRow.classList.add("animated");\n              bottomRow.style.animation = "scrollRight 30s linear infinite";\n              const content = bottomRow.innerHTML;\n              bottomRow.innerHTML = content + content;\n            }\n\n            observer.disconnect();\n          }\n        });\n      },\n      { threshold: 0.1 }\n    );\n\n    observer.observe(container);\n  }\n\n  function setupCookieBanner() {\n    if (!CookieUtils.hasMadeChoice()) {\n      const cookieBanner = document.getElementById("cookie-banner");\n      if (cookieBanner) {\n        cookieBanner.classList.remove("hidden");\n\n        document\n          .getElementById("accept-all-cookies")\n          ?.addEventListener("click", () => {\n            CookieUtils.savePreferences(true, true, true);\n            cookieBanner.classList.add("hidden");\n          });\n\n        document\n          .getElementById("accept-selected-cookies")\n          ?.addEventListener("click", () => {\n            const functional =\n              document.getElementById("functional-cookies")?.checked || false;\n            const analytics =\n              document.getElementById("analytics-cookies")?.checked || false;\n            CookieUtils.savePreferences(true, functional, analytics);\n            cookieBanner.classList.add("hidden");\n          });\n\n        document\n          .getElementById("reject-all-cookies")\n          ?.addEventListener("click", () => {\n            CookieUtils.savePreferences(true, false, false);\n            cookieBanner.classList.add("hidden");\n          });\n      }\n    }\n  }\n\n  if (document.readyState === "loading") {\n    document.addEventListener("DOMContentLoaded", () => {\n      setTimeout(() => {\n        setupTestimonialsAnimation();\n        setupCookieBanner();\n      }, 100);\n    });\n  } else {\n    setTimeout(() => {\n      setupTestimonialsAnimation();\n      setupCookieBanner();\n    }, 100);\n  }\n<\/script> '])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<section class="container mx-auto px-4 py-8" data-astro-cid-j7pv25f6> <div class="flex flex-col justify-center items-center" data-astro-cid-j7pv25f6> <h2 class="font-secondary text-3xl md:text-5xl font-bold text-center mb-10" data-astro-cid-j7pv25f6>
Des outils concrets pour surmonter le harcèlement
</h2> </div> ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Espaces de soutien et de partage", "description": "Rejoignez notre communaut\xE9 pour \xE9changer anonymement avec des professionnels et d'autres membres dans un environnement s\xE9curis\xE9.", "buttonText": "D\xE9couvrir l'outil", "buttonLink": "#", "imageUrl": "/src/assets/maquette_accueil/maquette_message.webp", "bgColor": "bg-pink-100", "imagePosition": "right", "layout": "horizontal", "bgGradient": "bg-gradient-to-r from-[#FFE3FA] to-[#FF9CED]", "loading": "lazy", "width": "400", "height": "300", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Suivi votre humeur", "description": "Enregistrez vos humeurs avec le Moodtracker et recevez des conseils personnalis\xE9s pour am\xE9liorer votre bien-\xEAtre.", "buttonText": "Suivre votre humeur", "buttonLink": "#", "imageUrl": "/src/assets/maquette_accueil/maquette_humeur.webp", "bgColor": "bg-orange-200", "bgGradient": "bg-gradient-to-r from-[#FFDEDE] to-[#EDA8A8]", "imagePosition": "left", "layout": "horizontal", "loading": "lazy", "width": "400", "height": "300", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Kit de secours contre le harc\xE8lement", "description": "Acc\xE9dez aux ressources essentielles : num\xE9ros d'urgence, conseils pratiques et soutien imm\xE9diat contre le harc\xE8lement.", "buttonText": "D\xE9couvrir le kit", "buttonLink": "#", "imageUrl": "/src/assets/maquette_accueil/maquette_kit-de-secours.webp", "bgColor": "bg-blue-100", "bgGradient": "bg-gradient-to-r from-[#E2EEFF] to-[#7CA7E5]", "imagePosition": "right", "layout": "horizontal", "loading": "lazy", "width": "400", "height": "300", "data-astro-cid-j7pv25f6": true })} </section> <section class="w-full bg-gradient-to-b from-[#323F92] to-[#121D64] py-16" data-astro-cid-j7pv25f6> <div class="max-w-6xl mx-auto px-4" data-astro-cid-j7pv25f6> <h2 class="font-secondary text-white text-3xl md:text-5xl font-bold text-center mb-10" data-astro-cid-j7pv25f6>
Un accompagnement motivant<br data-astro-cid-j7pv25f6>et adapté à votre rythme
</h2> <div class="flex flex-col md:flex-row justify-center gap-8" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Plan de suivi personnalis\xE9", "description": "Un parcours adapt\xE9 \xE0 votre situation avec des ressources et du soutien pour avancer \xE0 votre rythme.", "buttonText": "D\xE9couvrir", "buttonLink": "#", "bgColor": "bg-white", "layout": "horizontal", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "D\xE9fis et r\xE9compenses", "description": "Restez motiv\xE9 avec notre syst\xE8me de badges et de d\xE9fis quotidiens pour c\xE9l\xE9brer chaque progr\xE8s.", "buttonText": "D\xE9fis & r\xE9compenses", "buttonLink": "#", "bgColor": "bg-white", "layout": "horizontal", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <section class="relative py-10 px-4" data-astro-cid-j7pv25f6> <div class="relative flex flex-col items-center mb-10 z-10" data-astro-cid-j7pv25f6> <h2 class="relative text-3xl md:text-4xl font-bold font-secondary text-center z-10 bg-white/70 px-4 py-2 rounded-lg" data-astro-cid-j7pv25f6>
Une application pensée pour <br data-astro-cid-j7pv25f6> votre sécurité
</h2> </div> <div class="absolute right-0 md:right-30 -top-15 w-40 z-0" data-astro-cid-j7pv25f6> <img src="/src/assets/homme-securite.webp" alt="Sécurité" class="w-full h-auto object-cover" loading="lazy" width="160" height="240" data-astro-cid-j7pv25f6> </div> <div class="relative z-10 mx-auto max-w-7xl" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Protection des communications", "description": "Nous filtrons et mod\xE9rons les contenus avec des outils avanc\xE9s pour garantir un environnement s\xFBr et respectueux.", "buttonText": "En savoir plus", "buttonLink": "#", "bgColor": "bg-[#cfe1ff]", "bgGradient": "bg-gradient-to-r from-[#E2EEFF] to-[#B1D2FF]", "layout": "vertical", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Infrastructure S\xE9curis\xE9e", "description": "Chiffrement de bout en bout et outils de surveillance pour prot\xE9ger vos messages et donn\xE9es confidentielles.", "buttonText": "En savoir plus", "buttonLink": "#", "bgColor": "bg-[#cfe1ff]", "bgGradient": "bg-gradient-to-r from-[#E2EEFF] to-[#B1D2FF]", "layout": "vertical", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} <div class="md:col-span-2" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "title": "Mesures de S\xE9curit\xE9 Suppl\xE9mentaires", "description": "Audits r\xE9guliers, tests de s\xE9curit\xE9 et authentification \xE0 deux facteurs pour prot\xE9ger votre compte et vos informations.", "buttonText": "Nos protections", "buttonLink": "#", "bgColor": "bg-[#cfe1ff]", "bgGradient": "bg-gradient-to-r from-[#E2EEFF] to-[#B1D2FF]", "layout": "vertical", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section> <section data-astro-cid-j7pv25f6> <div class="flex justify-center items-center gap-2 mb-4" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-j7pv25f6> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-astro-cid-j7pv25f6></path> </svg> <span class="text-sm font-medium" data-astro-cid-j7pv25f6>4.8/5 sur 10k avis</span> </div> <div class="relative flex flex-col items-center mb-10" data-astro-cid-j7pv25f6> <div class="absolute left-0 md:left-30 top-1/2 transform -translate-y-1/2 w-40 z-0" data-astro-cid-j7pv25f6> <img src="/src/assets/femme-temoignage.webp" alt="Témoignage" class="w-full h-auto object-cover" loading="lazy" width="160" height="240" data-astro-cid-j7pv25f6> </div> <h2 class="relative text-3xl md:text-4xl font-bold font-secondary text-center z-10 bg-white/70 px-4 py-2 rounded-lg" data-astro-cid-j7pv25f6>
Témoignages d'utilisateurs
</h2> </div> <div class="relative bg-gradient-to-b from-[#FFDEDE] to-[#FFB3B3] py-16 overflow-hidden" data-astro-cid-j7pv25f6> <div id="testimonials-container" class="w-full overflow-hidden" data-astro-cid-j7pv25f6> <div class="flex w-full gap-x-4 top-row" data-astro-cid-j7pv25f6> ${topRowTestimonials.map((testimonial) => renderTemplate`<div class="min-w-[280px] md:min-w-[320px] flex-shrink-0 w-full md:w-[calc(50%-12px)]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TemoignageCard", $$TemoignageCard, { "name": testimonial.name, "rating": testimonial.rating, "content": testimonial.content, "loading": "lazy", "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <div class="flex w-full gap-x-4 mt-8 bottom-row" data-astro-cid-j7pv25f6> ${bottomRowTestimonials.map((testimonial) => renderTemplate`<div class="min-w-[280px] md:min-w-[320px] flex-shrink-0 w-full md:w-[calc(50%-12px)]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TemoignageCard", $$TemoignageCard, { "name": testimonial.name, "rating": testimonial.rating, "content": testimonial.content, "loading": "lazy", "data-astro-cid-j7pv25f6": true })} </div>`)} </div> </div> </div> </section> <section class="relative py-10 px-4" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center z-10" data-astro-cid-j7pv25f6> <h2 class="relative text-3xl md:text-4xl font-bold font-secondary text-center z-10 bg-white/70 px-4 py-2 rounded-lg" data-astro-cid-j7pv25f6>
FAQ
</h2> </div> <div class="absolute right-0 md:right-30 -top-15 w-40 z-0" data-astro-cid-j7pv25f6> <img src="/src/assets/homme-FAQ.webp" alt="FAQ" class="w-full h-auto object-cover" loading="lazy" width="160" height="240" data-astro-cid-j7pv25f6> </div> <div class="relative z-10 mx-auto max-w-6xl" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FAQItem", $$FAQItem, { "data-astro-cid-j7pv25f6": true })} </div> </section> <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-white p-6 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto z-50 w-full md:max-w-4xl md:mx-auto md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-t-2xl hidden" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-j7pv25f6>Paramètres de confidentialité</h2> <p class="mb-4 text-sm" data-astro-cid-j7pv25f6>
Cette application utilise des cookies pour différentes finalités.
</p> <div class="mb-4 p-3 border border-gray-200 rounded-lg" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h3 class="font-semibold" data-astro-cid-j7pv25f6>Cookies nécessaires</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>
Indispensables au fonctionnement du site.
</p> </div> <div class="ml-4" data-astro-cid-j7pv25f6> <span class="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full" data-astro-cid-j7pv25f6>Obligatoires</span> </div> </div> </div> <div class="mb-4 p-3 border border-gray-200 rounded-lg" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h3 class="font-semibold" data-astro-cid-j7pv25f6>Cookies fonctionnels</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>
Pour les fonctionnalités personnalisées.
</p> </div> <div class="ml-4" data-astro-cid-j7pv25f6> <label class="relative inline-flex items-center cursor-pointer" data-astro-cid-j7pv25f6> <input type="checkbox" id="functional-cookies" class="sr-only peer" checked data-astro-cid-j7pv25f6> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" data-astro-cid-j7pv25f6></div> </label> </div> </div> </div> <div class="mb-4 p-3 border border-gray-200 rounded-lg" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h3 class="font-semibold" data-astro-cid-j7pv25f6>Cookies analytiques</h3> <p class="text-sm text-gray-600" data-astro-cid-j7pv25f6>Pour améliorer l'application.</p> </div> <div class="ml-4" data-astro-cid-j7pv25f6> <label class="relative inline-flex items-center cursor-pointer" data-astro-cid-j7pv25f6> <input type="checkbox" id="analytics-cookies" class="sr-only peer" data-astro-cid-j7pv25f6> <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" data-astro-cid-j7pv25f6></div> </label> </div> </div> </div> <p class="mb-6 text-sm" data-astro-cid-j7pv25f6> <a href="/politique-cookies" class="text-blue-600 underline" data-astro-cid-j7pv25f6>Politique de confidentialité</a> </p> <div class="flex flex-col sm:flex-row gap-3 justify-center" data-astro-cid-j7pv25f6> <button id="reject-all-cookies" class="order-2 sm:order-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-100 transition duration-300" data-astro-cid-j7pv25f6>
Tout refuser
</button> <button id="accept-selected-cookies" class="order-1 sm:order-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-3xl hover:bg-blue-700 transition duration-300" data-astro-cid-j7pv25f6>
Accepter la sélection
</button> <button id="accept-all-cookies" class="order-3 px-6 py-3 bg-green-600 text-white rounded-3xl hover:bg-green-700 transition duration-300" data-astro-cid-j7pv25f6>
Tout accepter
</button> </div> </div> ` }));
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
