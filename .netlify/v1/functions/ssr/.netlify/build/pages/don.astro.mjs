import { a as createComponent, e as renderComponent, r as renderTemplate, d as renderScript, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6NBKjMwL.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const paypalLogo = new Proxy({"src":"/_astro/paypal-logo.BzB9pQl1.png","width":142,"height":140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/assets/paypal-logo.png";
							}
							
							return target[name];
						}
					});

const gpayLogo = new Proxy({"src":"/_astro/googlepay-logo.BuVU1DBB.png","width":143,"height":68,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/assets/googlepay-logo.png";
							}
							
							return target[name];
						}
					});

const creditcardIcon = new Proxy({"src":"/_astro/creditcard-icon.C9CnXe2M.png","width":162,"height":134,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/assets/creditcard-icon.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="w-full max-w-md mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md my-4 mt-5"> <h1 class="font-secondary text-2xl sm:text-3xl font-bold text-center mb-4">
Faire un Don
</h1> <p class="text-sm sm:text-base mb-4 sm:mb-6">
Vos dons nous aident \xE0 maintenir Echo Safe gratuite et s\xE9curis\xE9e pour
      tous.
</p> <p class="text-sm sm:text-base mb-4 sm:mb-6">
Ils nous permettent de d\xE9velopper de nouvelles fonctionnalit\xE9s,
      d'am\xE9liorer la s\xE9curit\xE9 et de garantir une exp\xE9rience utilisateur
      optimale.
</p> <form id="donation-form" class="space-y-4"> <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3"> <button type="button" class="hover:cursor-pointer donation-amount-btn border border-primary text-primary py-2 rounded-md transition-colors hover:bg-primary hover:text-white active:bg-primary active:text-white focus:bg-primary focus:text-white" data-amount="2">2\u20AC</button> <button type="button" class="hover:cursor-pointer donation-amount-btn border border-primary text-primary py-2 rounded-md transition-colors hover:bg-primary hover:text-white active:bg-primary active:text-white focus:bg-primary focus:text-white" data-amount="5">5\u20AC</button> <button type="button" class="hover:cursor-pointer donation-amount-btn border border-primary text-primary py-2 rounded-md transition-colors hover:bg-primary hover:text-white active:bg-primary active:text-white focus:bg-primary focus:text-white" data-amount="10">10\u20AC</button> <button type="button" class="hover:cursor-pointer donation-amount-btn border border-primary text-primary py-2 rounded-md transition-colors hover:bg-primary hover:text-white active:bg-primary active:text-white focus:bg-primary focus:text-white" data-amount="20">20\u20AC</button> </div> <div> <label for="custom-amount" class="block text-sm font-medium mb-1">Votre montant</label> <input type="number" id="custom-amount" name="custom-amount" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" min="1" step="1"> </div> <div class="mt-6"> <div class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center gap-3"> <button type="button" class="hover:cursor-pointer payment-method-btn flex-1 flex items-center justify-center bg-white border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500" data-method="paypal"> <img`, ' alt="PayPal" class="h-5 sm:h-6"> </button> <button type="button" class="hover:cursor-pointer payment-method-btn flex-1 flex items-center justify-center bg-white border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500" data-method="gpay"> <img', ' alt="Google Pay" class="h-5 sm:h-6"> </button> <button type="button" class="hover:cursor-pointer payment-method-btn flex-1 flex items-center justify-center bg-white border border-gray-300 rounded-md p-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500" data-method="card"> <img', ' alt="Credit Card" class="h-5 sm:h-6"> </button> </div> </div> <div id="process-status" class="hidden"> <div class="flex items-center justify-center p-4"> <div class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-indigo-600 mr-2"></div> <span class="">Traitement en cours...</span> </div> </div> <div id="error-message" class="hidden text-center text-red-600 bg-red-50 p-3 rounded-md"></div> <button type="submit" id="donate-button" class="hover:cursor-pointer w-full bg-primary text-white py-2 sm:py-3 rounded-3xl hover:bg-white hover:text-primary hover:border-1 transition-colors mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base font-medium" disabled>\nFaire un don\n</button> <div class="text-sm text-gray-500 mt-6 text-center"> <p class="mb-2">\u{1F512} Paiement s\xE9curis\xE9</p> <p>\nToutes les transactions sont s\xE9curis\xE9es et chiffr\xE9es.<br>\nVos informations sont trait\xE9es en toute confidentialit\xE9.\n</p> </div> </form> </div> <script src="https://js.stripe.com/v3/"><\/script> ', " "])), maybeRenderHead(), addAttribute(paypalLogo.src, "src"), addAttribute(gpayLogo.src, "src"), addAttribute(creditcardIcon.src, "src"), renderScript($$result2, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/don/index.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/don/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/don/index.astro";
const $$url = "/don";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
