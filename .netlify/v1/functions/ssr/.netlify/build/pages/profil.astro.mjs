import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, u as unescapeHTML, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../chunks/Layoutapp_5LaSD89_.mjs';
import 'clsx';
/* empty css                                 */
import { c as createSvgComponent } from '../chunks/logo_echosafe_DeMEOBng.mjs';
import PocketBase from 'pocketbase';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro$1 = createAstro("https://echosafe.eloishenry.fr/");
const $$ButtonV2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtonV2;
  const {
    variant = "default",
    size = "medium",
    url = "#",
    text = "",
    icon = "",
    fullWidth = false,
    // Par défaut, le bouton n'est pas en pleine largeur
    mobileFullWidth = false,
    // Par défaut, le bouton n'est pas en pleine largeur sur mobile
    withArrow = false
    // Par défaut, pas de flèche
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
  const iconSizeClass = {
    small: "w-5 h-5",
    // Augmenté de w-4 h-4
    medium: "w-6 h-6",
    // Augmenté de w-5 h-5
    large: "w-7 h-7"
    // Augmenté de w-6 h-6
  };
  const arrowSizeClass = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6"
  };
  const widthClass = fullWidth ? "w-full" : "";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`inline-flex items-center justify-between text-[var(--color-primary)] border-1 border-[var(--color-primary)] font-normal rounded-xl transition duration-300 ease-in-out ${variantClass[variant]} ${sizeClass[size]} ${widthClass}`, "class")}> <div class="flex items-center gap-2"> ${icon && renderTemplate`<span${addAttribute(iconSizeClass[size], "class")}>${unescapeHTML(icon)}</span>`} ${renderSlot($$result, $$slots["default"])} <span>${text}</span> </div> ${withArrow && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${arrowSizeClass[size]} text-[var(--color-primary)]`, "class")} viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg>`} </a>`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/components/Button-v2.astro", void 0);

const InfoPersoIcon = createSvgComponent({"meta":{"src":"/_astro/info-perso_icon.EQp9Km89.svg","width":39,"height":39,"format":"svg"},"attributes":{"width":"39","height":"39","viewBox":"0 0 39 39","fill":"none"},"children":"\r\n<rect width=\"39\" height=\"39\" rx=\"7\" fill=\"#323F92\" />\r\n<path d=\"M20 19C21.5913 19 23.1174 18.3679 24.2426 17.2426C25.3679 16.1174 26 14.5913 26 13C26 11.4087 25.3679 9.88258 24.2426 8.75736C23.1174 7.63214 21.5913 7 20 7C18.4087 7 16.8826 7.63214 15.7574 8.75736C14.6321 9.88258 14 11.4087 14 13C14 14.5913 14.6321 16.1174 15.7574 17.2426C16.8826 18.3679 18.4087 19 20 19ZM24 13C24 14.0609 23.5786 15.0783 22.8284 15.8284C22.0783 16.5786 21.0609 17 20 17C18.9391 17 17.9217 16.5786 17.1716 15.8284C16.4214 15.0783 16 14.0609 16 13C16 11.9391 16.4214 10.9217 17.1716 10.1716C17.9217 9.42143 18.9391 9 20 9C21.0609 9 22.0783 9.42143 22.8284 10.1716C23.5786 10.9217 24 11.9391 24 13ZM32 29C32 31 30 31 30 31H10C10 31 8 31 8 29C8 27 10 21 20 21C30 21 32 27 32 29ZM30 28.992C29.998 28.5 29.692 27.02 28.336 25.664C27.032 24.36 24.578 23 20 23C15.422 23 12.968 24.36 11.664 25.664C10.308 27.02 10.004 28.5 10 28.992H30Z\" fill=\"white\" />\r\n"});

const ParametreIcon = createSvgComponent({"meta":{"src":"/_astro/parametre_icon.lHfNrIca.svg","width":39,"height":39,"format":"svg"},"attributes":{"width":"39","height":"39","viewBox":"0 0 39 39","fill":"none"},"children":"\r\n<rect width=\"39\" height=\"39\" rx=\"7\" fill=\"#323F92\" />\r\n<path d=\"M15.4042 31.5832C14.8146 31.5798 14.2421 31.3847 13.773 31.0274L11.2718 29.1666C10.6945 28.7165 10.3116 28.0626 10.2014 27.339C10.0913 26.6154 10.2625 25.8771 10.6797 25.2757C10.9004 24.9498 11.0407 24.5761 11.089 24.1854C11.1373 23.7947 11.0923 23.3981 10.9576 23.0282L10.8851 22.8349C10.7913 22.5001 10.6199 22.1921 10.3847 21.936C10.1496 21.6798 9.85735 21.4827 9.53175 21.3607H9.33842C8.63259 21.1234 8.04889 20.6172 7.71406 19.9521C7.37924 19.2869 7.32031 18.5166 7.55008 17.8082L8.54092 14.6666C8.63213 14.3026 8.80005 13.9623 9.03345 13.6684C9.26685 13.3746 9.56033 13.134 9.89425 12.9628C10.2052 12.8026 10.5455 12.7071 10.8944 12.6822C11.2433 12.6573 11.5937 12.7034 11.9243 12.8178C12.2842 12.939 12.6683 12.9704 13.0431 12.9093C13.418 12.8482 13.7722 12.6965 14.0751 12.4674L14.2322 12.3466C14.5063 12.1278 14.7279 11.8503 14.8806 11.5345C15.0332 11.2187 15.1131 10.8727 15.1143 10.522V10.232C15.111 9.49264 15.4 8.78195 15.9182 8.25464C16.4365 7.72734 17.142 7.42612 17.8813 7.41656H20.9626C21.3223 7.41753 21.6782 7.48955 22.01 7.62849C22.3418 7.76742 22.6429 7.97053 22.8959 8.22615C23.4279 8.76723 23.7235 9.49735 23.7176 10.2561V10.5945C23.7115 10.9277 23.7837 11.2577 23.9285 11.5578C24.0734 11.8579 24.2867 12.1199 24.5513 12.3224L24.6843 12.4191C24.9554 12.6224 25.2718 12.7572 25.6063 12.8119C25.9409 12.8666 26.2837 12.8396 26.6055 12.7332L27.0163 12.6003C27.3644 12.4849 27.7322 12.4408 28.0977 12.4707C28.4631 12.5005 28.8189 12.6036 29.1437 12.7739C29.4684 12.9442 29.7556 13.1781 29.988 13.4618C30.2204 13.7454 30.3933 14.073 30.4963 14.4249L31.4509 17.4699C31.6718 18.1736 31.6114 18.9356 31.2825 19.5957C30.9535 20.2559 30.3816 20.7629 29.6868 21.0103L29.4451 21.0949C29.0896 21.2113 28.7682 21.4132 28.5091 21.6829C28.2499 21.9526 28.061 22.2818 27.9588 22.6416C27.8627 22.976 27.8399 23.3273 27.892 23.6715C27.9441 24.0156 28.07 24.3443 28.2609 24.6353L28.5751 25.0945C28.9917 25.6992 29.1612 26.4404 29.0489 27.166C28.9366 27.8917 28.5509 28.547 27.9709 28.9974L25.5422 30.8703C25.2487 31.0947 24.9125 31.2567 24.5541 31.3462C24.1957 31.4358 23.8228 31.451 23.4583 31.391C23.0938 31.331 22.7455 31.1971 22.4347 30.9974C22.124 30.7977 21.8574 30.5365 21.6513 30.2299L21.5063 30.0245C21.3084 29.7271 21.0384 29.4846 20.7215 29.3198C20.4045 29.155 20.051 29.0732 19.6938 29.082C19.3531 29.0908 19.0191 29.1796 18.719 29.3412C18.4188 29.5028 18.1609 29.7328 17.9659 30.0124L17.688 30.4111C17.4819 30.7199 17.2148 30.9832 16.9031 31.1848C16.5913 31.3863 16.2416 31.522 15.8755 31.5832C15.7188 31.5986 15.561 31.5986 15.4042 31.5832ZM10.3172 19.0407C10.9995 19.284 11.6152 19.6841 12.1147 20.2088C12.6142 20.7335 12.9835 21.3681 13.193 22.0616V22.2066C13.4539 22.9275 13.5396 23.7001 13.4429 24.4607C13.3463 25.2213 13.0701 25.948 12.6372 26.5807C12.5607 26.6652 12.5184 26.775 12.5184 26.8889C12.5184 27.0027 12.5607 27.1126 12.6372 27.197L15.2351 29.1666C15.269 29.1932 15.3082 29.2123 15.35 29.2225C15.3919 29.2327 15.4355 29.2338 15.4778 29.2258C15.5202 29.2178 15.5603 29.2008 15.5956 29.176C15.6308 29.1512 15.6603 29.1191 15.6822 29.082L15.9601 28.6832C16.3792 28.0776 16.939 27.5826 17.5914 27.2407C18.2438 26.8988 18.9694 26.7202 19.7059 26.7202C20.4425 26.7202 21.168 26.8988 21.8204 27.2407C22.4728 27.5826 23.0326 28.0776 23.4518 28.6832L23.5968 28.9007C23.6487 28.9744 23.7262 29.0261 23.8143 29.0457C23.8546 29.0517 23.8958 29.0494 23.9352 29.039C23.9747 29.0286 24.0116 29.0104 24.0438 28.9853L26.533 27.1003C26.6201 27.0312 26.6775 26.9312 26.6932 26.8211C26.7089 26.711 26.6819 26.599 26.6176 26.5082L26.3034 26.0491C25.8941 25.4522 25.624 24.7709 25.5131 24.0557C25.4023 23.3404 25.4535 22.6094 25.663 21.9166C25.8754 21.1884 26.2595 20.5219 26.7831 19.973C27.3066 19.4242 27.9544 19.0092 28.6717 18.7628L28.9134 18.6782C29.0141 18.6379 29.0948 18.5593 29.1378 18.4597C29.1808 18.3601 29.1827 18.2475 29.143 18.1466L28.2005 15.1378C28.1779 15.0852 28.1448 15.0377 28.1032 14.9982C28.0617 14.9587 28.0126 14.9281 27.9588 14.9082C27.9233 14.8902 27.8839 14.8808 27.844 14.8808C27.8042 14.8808 27.7648 14.8902 27.7293 14.9082L27.3184 15.0411C26.6234 15.2705 25.8832 15.3277 25.1612 15.2077C24.4393 15.0877 23.7573 14.7942 23.1738 14.3524L23.1255 14.2436C22.5657 13.8197 22.1117 13.2717 21.7993 12.6427C21.4869 12.0137 21.3246 11.3209 21.3251 10.6186V10.2441C21.3273 10.1276 21.2839 10.0149 21.2043 9.9299C21.1347 9.86707 21.0442 9.83258 20.9505 9.83323H17.8813C17.8321 9.8363 17.784 9.84907 17.7397 9.87079C17.6954 9.89252 17.6559 9.92277 17.6233 9.95982C17.5907 9.99687 17.5658 10.04 17.55 10.0867C17.5341 10.1334 17.5276 10.1828 17.5309 10.232V10.5341C17.531 11.2555 17.3654 11.9673 17.047 12.6146C16.7286 13.262 16.2658 13.8276 15.6943 14.2678L15.5372 14.3886C14.9206 14.8581 14.198 15.1687 13.4331 15.293C12.6682 15.4173 11.8844 15.3516 11.1509 15.1016C11.096 15.0831 11.0366 15.0831 10.9817 15.1016C10.9136 15.143 10.8622 15.2072 10.8367 15.2828L9.83383 18.4366C9.79887 18.544 9.80707 18.6608 9.85668 18.7623C9.90629 18.8637 9.99343 18.9419 10.0997 18.9803L10.3172 19.0407Z\" fill=\"white\" />\r\n<path d=\"M19.4997 23.729C18.6632 23.729 17.8456 23.481 17.1501 23.0163C16.4546 22.5516 15.9125 21.8911 15.5924 21.1183C15.2723 20.3455 15.1886 19.4952 15.3518 18.6748C15.515 17.8544 15.9177 17.1008 16.5092 16.5094C17.1007 15.9179 17.8542 15.5151 18.6746 15.352C19.495 15.1888 20.3453 15.2725 21.1181 15.5926C21.8909 15.9127 22.5514 16.4548 23.0161 17.1503C23.4808 17.8457 23.7288 18.6634 23.7288 19.4999C23.7288 20.6215 23.2833 21.6972 22.4901 22.4903C21.697 23.2835 20.6213 23.729 19.4997 23.729ZM19.4997 17.6874C19.1412 17.6874 18.7908 17.7937 18.4927 17.9928C18.1946 18.192 17.9623 18.4751 17.8251 18.8062C17.688 19.1374 17.6521 19.5019 17.722 19.8535C17.7919 20.2051 17.9646 20.528 18.218 20.7815C18.4715 21.035 18.7945 21.2076 19.1461 21.2775C19.4977 21.3475 19.8621 21.3116 20.1933 21.1744C20.5245 21.0372 20.8076 20.8049 21.0067 20.5068C21.2059 20.2088 21.3122 19.8583 21.3122 19.4999C21.3122 19.0192 21.1212 18.5581 20.7813 18.2182C20.4414 17.8783 19.9804 17.6874 19.4997 17.6874Z\" fill=\"white\" />\r\n"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let userInitials = "U";
  let userName = "Utilisateur";
  let userAge = "";
  let userBirthDate = "";
  let userAvatar = null;
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  try {
    if (pb.authStore.isValid) {
      const user = pb.authStore.model;
      console.log("Utilisateur connect\xE9:", user);
      const userId = user.id;
      const userData = await pb.collection("users").getOne(userId);
      console.log("Donn\xE9es utilisateur compl\xE8tes:", userData);
      if (userData.prenom_utilisateur && userData.nom_utilisateur) {
        userInitials = userData.prenom_utilisateur.charAt(0).toUpperCase() + userData.nom_utilisateur.charAt(0).toUpperCase();
      } else if (userData.pseudo) {
        userInitials = userData.pseudo.charAt(0).toUpperCase();
      }
      userName = userData.prenom_utilisateur || userData.pseudo || "Utilisateur";
      if (userData.date_naissance_utilisateur) {
        try {
          const birthDate = new Date(userData.date_naissance_utilisateur);
          if (!isNaN(birthDate.getTime())) {
            const today = /* @__PURE__ */ new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
              age--;
            }
            userAge = age;
            userBirthDate = `${birthDate.getDate().toString().padStart(2, "0")}/${(birthDate.getMonth() + 1).toString().padStart(2, "0")}/${birthDate.getFullYear()}`;
          }
        } catch (dateError) {
          console.error(
            "Erreur lors du traitement de la date de naissance:",
            dateError
          );
        }
      }
      if (userData.avatar) {
        userAvatar = `https://echosafe.eloishenry.fr/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`;
        console.log("URL de l'avatar:", userAvatar);
      }
    }
  } catch (error) {
    console.error(
      "Erreur lors de la r\xE9cup\xE9ration des donn\xE9es utilisateur:",
      error
    );
  }
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("DOMContentLoaded", async () => {\n    try {\n      const script = document.createElement("script");\n      script.src = "https://unpkg.com/pocketbase@0.15.2/dist/pocketbase.umd.js";\n      script.onload = async function () {\n        const pb = new PocketBase("https://echosafe.eloishenry.fr");\n\n        if (pb.authStore.isValid) {\n          console.log("Client: Utilisateur connect\xE9");\n\n          try {\n            const userData = await pb\n              .collection("users")\n              .getOne(pb.authStore.model.id);\n            console.log("Client: Informations utilisateur compl\xE8tes", userData);\n\n            console.log("Client: Test date_naissance_utilisateur", {\n              exists: "date_naissance_utilisateur" in userData,\n              value: userData.date_naissance_utilisateur,\n              asDate: userData.date_naissance_utilisateur\n                ? new Date(userData.date_naissance_utilisateur)\n                : null,\n            });\n\n            console.log("Client: Test avatar", {\n              exists: "avatar" in userData,\n              value: userData.avatar,\n              url: userData.avatar\n                ? `https://echosafe.eloishenry.fr/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`\n                : null,\n            });\n\n            if (userData.avatar) {\n              const avatarUrl = `https://echosafe.eloishenry.fr/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`;\n              const avatarContainer =\n                document.getElementById("avatar-container");\n\n              if (avatarContainer) {\n                const newImg = new Image();\n                newImg.className = "w-full h-full object-cover";\n                newImg.style.width = "100%";\n                newImg.style.height = "100%";\n                newImg.style.objectFit = "cover";\n                newImg.alt = "Photo de profil";\n\n                newImg.onerror = function () {\n                  let initials = "";\n                  if (userData.prenom_utilisateur && userData.nom_utilisateur) {\n                    initials =\n                      userData.prenom_utilisateur.charAt(0).toUpperCase() +\n                      userData.nom_utilisateur.charAt(0).toUpperCase();\n                  } else if (userData.pseudo) {\n                    initials = userData.pseudo.charAt(0).toUpperCase();\n                  } else {\n                    initials = "U";\n                  }\n\n                  avatarContainer.innerHTML = `<span class="text-3xl font-bold text-indigo-600">${initials}</span>`;\n                };\n\n                newImg.onload = function () {\n                  avatarContainer.innerHTML = "";\n                  avatarContainer.appendChild(newImg);\n                };\n\n                newImg.src = avatarUrl;\n              }\n            }\n\n            if (userData.date_naissance_utilisateur) {\n              const birthDate = new Date(userData.date_naissance_utilisateur);\n              if (!isNaN(birthDate.getTime())) {\n                const formattedDate = `${birthDate.getDate().toString().padStart(2, "0")}/${(birthDate.getMonth() + 1).toString().padStart(2, "0")}/${birthDate.getFullYear()}`;\n\n                const today = new Date();\n                let age = today.getFullYear() - birthDate.getFullYear();\n                const monthDiff = today.getMonth() - birthDate.getMonth();\n                if (\n                  monthDiff < 0 ||\n                  (monthDiff === 0 && today.getDate() < birthDate.getDate())\n                ) {\n                  age--;\n                }\n\n                const birthDateDisplay =\n                  document.getElementById("birth-date-display");\n                if (birthDateDisplay) {\n                  birthDateDisplay.textContent = `${formattedDate} - ${age} ans`;\n                }\n              }\n            }\n          } catch (error) {\n            console.error(\n              "Client: Erreur lors de la r\xE9cup\xE9ration des donn\xE9es",\n              error\n            );\n          }\n        } else {\n          console.log("Client: Utilisateur non connect\xE9");\n        }\n      };\n      document.head.appendChild(script);\n    } catch (error) {\n      console.error("Client: Erreur globale", error);\n    }\n  });\n<\/script>'], ["", ' <script>\n  document.addEventListener("DOMContentLoaded", async () => {\n    try {\n      const script = document.createElement("script");\n      script.src = "https://unpkg.com/pocketbase@0.15.2/dist/pocketbase.umd.js";\n      script.onload = async function () {\n        const pb = new PocketBase("https://echosafe.eloishenry.fr");\n\n        if (pb.authStore.isValid) {\n          console.log("Client: Utilisateur connect\xE9");\n\n          try {\n            const userData = await pb\n              .collection("users")\n              .getOne(pb.authStore.model.id);\n            console.log("Client: Informations utilisateur compl\xE8tes", userData);\n\n            console.log("Client: Test date_naissance_utilisateur", {\n              exists: "date_naissance_utilisateur" in userData,\n              value: userData.date_naissance_utilisateur,\n              asDate: userData.date_naissance_utilisateur\n                ? new Date(userData.date_naissance_utilisateur)\n                : null,\n            });\n\n            console.log("Client: Test avatar", {\n              exists: "avatar" in userData,\n              value: userData.avatar,\n              url: userData.avatar\n                ? \\`https://echosafe.eloishenry.fr/api/files/\\${userData.collectionId}/\\${userData.id}/\\${userData.avatar}\\`\n                : null,\n            });\n\n            if (userData.avatar) {\n              const avatarUrl = \\`https://echosafe.eloishenry.fr/api/files/\\${userData.collectionId}/\\${userData.id}/\\${userData.avatar}\\`;\n              const avatarContainer =\n                document.getElementById("avatar-container");\n\n              if (avatarContainer) {\n                const newImg = new Image();\n                newImg.className = "w-full h-full object-cover";\n                newImg.style.width = "100%";\n                newImg.style.height = "100%";\n                newImg.style.objectFit = "cover";\n                newImg.alt = "Photo de profil";\n\n                newImg.onerror = function () {\n                  let initials = "";\n                  if (userData.prenom_utilisateur && userData.nom_utilisateur) {\n                    initials =\n                      userData.prenom_utilisateur.charAt(0).toUpperCase() +\n                      userData.nom_utilisateur.charAt(0).toUpperCase();\n                  } else if (userData.pseudo) {\n                    initials = userData.pseudo.charAt(0).toUpperCase();\n                  } else {\n                    initials = "U";\n                  }\n\n                  avatarContainer.innerHTML = \\`<span class="text-3xl font-bold text-indigo-600">\\${initials}</span>\\`;\n                };\n\n                newImg.onload = function () {\n                  avatarContainer.innerHTML = "";\n                  avatarContainer.appendChild(newImg);\n                };\n\n                newImg.src = avatarUrl;\n              }\n            }\n\n            if (userData.date_naissance_utilisateur) {\n              const birthDate = new Date(userData.date_naissance_utilisateur);\n              if (!isNaN(birthDate.getTime())) {\n                const formattedDate = \\`\\${birthDate.getDate().toString().padStart(2, "0")}/\\${(birthDate.getMonth() + 1).toString().padStart(2, "0")}/\\${birthDate.getFullYear()}\\`;\n\n                const today = new Date();\n                let age = today.getFullYear() - birthDate.getFullYear();\n                const monthDiff = today.getMonth() - birthDate.getMonth();\n                if (\n                  monthDiff < 0 ||\n                  (monthDiff === 0 && today.getDate() < birthDate.getDate())\n                ) {\n                  age--;\n                }\n\n                const birthDateDisplay =\n                  document.getElementById("birth-date-display");\n                if (birthDateDisplay) {\n                  birthDateDisplay.textContent = \\`\\${formattedDate} - \\${age} ans\\`;\n                }\n              }\n            }\n          } catch (error) {\n            console.error(\n              "Client: Erreur lors de la r\xE9cup\xE9ration des donn\xE9es",\n              error\n            );\n          }\n        } else {\n          console.log("Client: Utilisateur non connect\xE9");\n        }\n      };\n      document.head.appendChild(script);\n    } catch (error) {\n      console.error("Client: Erreur globale", error);\n    }\n  });\n<\/script>'])), renderComponent($$result, "Layoutapp", $$Layoutapp, { "removeContainerPadding": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="screen w-full overflow-hidden bg-gray-50 flex flex-col"> <div class="relative w-full bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 pt-14 pb-24"> <div class="absolute inset-0 overflow-hidden"> <div class="absolute top-12 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-400 opacity-30 rounded-full"></div> <div class="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-indigo-300 opacity-20 rounded-full"></div> </div> <div class="relative z-1 flex flex-col items-center justify-center h-28 mt-4"> <div class="relative mb-4"> ${userAvatar ? renderTemplate`<div id="avatar-container" class="w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg"> <img${addAttribute(userAvatar, "src")} alt="Photo de profil" class="w-full h-full object-cover" style="width: 100%; height: 100%; object-fit: cover;"> </div>` : renderTemplate`<div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"> <span class="text-3xl font-bold"> ${userInitials} </span> </div>`} <div id="change-avatar-badge" class="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors" title="Changer la photo de profil"> <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path> </svg> </div> </div> </div> </div> <div class="bg-white -mt-20 w-full rounded-t-4xl shadow-md relative z-2 pt-8 pb-6 flex-grow"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold mb-1">${userName}</h1> <p id="birth-date-display" class="text-sm&quot;"> ${userBirthDate ? userBirthDate : ""} ${userAge && userBirthDate ? ` - ${userAge} ans` : userAge ? `${userAge} ans` : ""} </p> </div> <div class="px-6 space-y-3"> ${renderComponent($$result2, "Button", $$ButtonV2, { "text": "Informations personnelles", "fullWidth": true, "withArrow": true, "url": "/profil/informations" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "InfoPersoIcon", InfoPersoIcon, { "class": "w-7 h-7" })} ` })} ${renderComponent($$result2, "Button", $$ButtonV2, { "text": "Param\xE8tres", "fullWidth": true, "withArrow": true, "url": "/profil/parametres" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ParametreIcon", ParametreIcon, { "class": "w-7 h-7" })} ` })} </div> </div> </div> ` }));
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/profil/index.astro";
const $$url = "/profil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
