import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_bcTkkZpB.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/accueil-app.astro.mjs');
const _page3 = () => import('./pages/api/checkout-session.astro.mjs');
const _page4 = () => import('./pages/api/login.astro.mjs');
const _page5 = () => import('./pages/api/logout.astro.mjs');
const _page6 = () => import('./pages/api/messages/send.astro.mjs');
const _page7 = () => import('./pages/api/register.astro.mjs');
const _page8 = () => import('./pages/api/request-password-reset.astro.mjs');
const _page9 = () => import('./pages/auth/connexion.astro.mjs');
const _page10 = () => import('./pages/auth/inscription.astro.mjs');
const _page11 = () => import('./pages/auth/mot-de-passe-oublie.astro.mjs');
const _page12 = () => import('./pages/auth.astro.mjs');
const _page13 = () => import('./pages/don/remerciement.astro.mjs');
const _page14 = () => import('./pages/don.astro.mjs');
const _page15 = () => import('./pages/formulaire.astro.mjs');
const _page16 = () => import('./pages/legal/conditions.astro.mjs');
const _page17 = () => import('./pages/legal/mentions-legales.astro.mjs');
const _page18 = () => import('./pages/legal/politique-confidentialite.astro.mjs');
const _page19 = () => import('./pages/legal/politique-cookies.astro.mjs');
const _page20 = () => import('./pages/messages/aide/_aidantid_.astro.mjs');
const _page21 = () => import('./pages/messages/aide.astro.mjs');
const _page22 = () => import('./pages/messages/prives/_userid_.astro.mjs');
const _page23 = () => import('./pages/messages/prives.astro.mjs');
const _page24 = () => import('./pages/messages.astro.mjs');
const _page25 = () => import('./pages/moodtracker.astro.mjs');
const _page26 = () => import('./pages/nos-offres.astro.mjs');
const _page27 = () => import('./pages/profil/informations.astro.mjs');
const _page28 = () => import('./pages/profil/parametres.astro.mjs');
const _page29 = () => import('./pages/profil.astro.mjs');
const _page30 = () => import('./pages/secours-app.astro.mjs');
const _page31 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos/index.astro", _page1],
    ["src/pages/accueil-app/index.astro", _page2],
    ["src/pages/api/checkout-session.js", _page3],
    ["src/pages/api/login.js", _page4],
    ["src/pages/api/logout.js", _page5],
    ["src/pages/api/messages/send.js", _page6],
    ["src/pages/api/register.js", _page7],
    ["src/pages/api/request-password-reset.js", _page8],
    ["src/pages/auth/connexion.astro", _page9],
    ["src/pages/auth/inscription.astro", _page10],
    ["src/pages/auth/mot-de-passe-oublie.astro", _page11],
    ["src/pages/auth/index.astro", _page12],
    ["src/pages/don/remerciement.astro", _page13],
    ["src/pages/don/index.astro", _page14],
    ["src/pages/formulaire/index.astro", _page15],
    ["src/pages/legal/conditions.astro", _page16],
    ["src/pages/legal/mentions-legales.astro", _page17],
    ["src/pages/legal/politique-confidentialite.astro", _page18],
    ["src/pages/legal/politique-cookies.astro", _page19],
    ["src/pages/messages/aide/[aidantId].astro", _page20],
    ["src/pages/messages/aide/index.astro", _page21],
    ["src/pages/messages/prives/[userId].astro", _page22],
    ["src/pages/messages/prives/index.astro", _page23],
    ["src/pages/messages/index.astro", _page24],
    ["src/pages/moodtracker/index.astro", _page25],
    ["src/pages/nos-offres/index.astro", _page26],
    ["src/pages/profil/informations.astro", _page27],
    ["src/pages/profil/parametres.astro", _page28],
    ["src/pages/profil/index.astro", _page29],
    ["src/pages/secours-app/index.astro", _page30],
    ["src/pages/index.astro", _page31]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "0c96bda2-bc2b-4446-9ec0-ee41842ac1bc"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
