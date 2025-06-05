import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, r as renderTemplate } from './astro/server_DviQv69v.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "default",
    size = "medium",
    url = "#",
    text = ""
  } = Astro2.props;
  const variantClass = {
    default: "border-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] hover:text-white",
    dark: "border border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-white hover:text-[var(--color-primary)]",
    outlined: "border-indigo-200 bg-red hover:bg-indigo-50"
  };
  const sizeClass = {
    small: "px-4 py-2.5 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-base"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`inline-flex items-center gap-2 text-[var(--color-primary)] border-1 border-[var(--color-primary)] font-normal rounded-3xl transition duration-300 ease-in-out ${variantClass[variant]} ${sizeClass[size]}`, "class")}> ${renderSlot($$result, $$slots["default"])} ${text} </a>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Button.astro", void 0);

export { $$Button as $ };
