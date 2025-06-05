import { c as createAstro, a as createComponent, e as renderComponent, d as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../../chunks/Layoutapp_5LaSD89_.mjs';
import PocketBase from 'pocketbase';
import { d as db } from '../../chunks/firebase_B1klU5AH.mjs';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
/* empty css                                    */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
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
  const currentUserId = pb.authStore.model.id;
  const isVolunteer = pb.authStore.model.is_volunteer || false;
  if (isVolunteer) {
    return Astro2.redirect("/messages/prives");
  }
  try {
    const currentUserRef = doc(db, "users", currentUserId);
    const currentUserSnap = await getDoc(currentUserRef);
    if (!currentUserSnap.exists()) {
      console.log("Cr\xE9ation de l'utilisateur courant dans Firebase");
      await setDoc(currentUserRef, {
        pseudo_utilisateur: pb.authStore.model.pseudo_utilisateur || "Utilisateur",
        is_volunteer: false,
        role: "user"
      });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la v\xE9rification/cr\xE9ation de l'utilisateur:",
      error
    );
  }
  try {
    const pocketBaseVolunteers = await pb.collection("users").getFullList({
      filter: "is_volunteer = true"
    });
    console.log(
      `${pocketBaseVolunteers.length} aidants b\xE9n\xE9voles trouv\xE9s dans PocketBase`
    );
    for (const volunteer of pocketBaseVolunteers) {
      const volunteerRef = doc(db, "users", volunteer.id);
      const userData = {
        pseudo_utilisateur: volunteer.pseudo || volunteer.prenom_utilisateur || "Aidant",
        is_volunteer: true,
        is_association: false,
        role: "volunteer",
        bio: volunteer.bio || "Aidant b\xE9n\xE9vole disponible pour vous aider.",
        updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        volunteer_type: "benevole"
      };
      await setDoc(volunteerRef, userData, { merge: true });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la synchronisation des aidants b\xE9n\xE9voles:",
      error
    );
  }
  let associations = [];
  try {
    associations = await pb.collection("association").getFullList();
    console.log(
      `${associations.length} associations professionnelles trouv\xE9es dans PocketBase`
    );
    associations.forEach((association, index) => {
      console.log(`Association ${index + 1} (ID: ${association.id}):`);
      console.log({
        nom: association.nom_personne,
        bio: association.biographie_association,
        modes: association.Mode_de_consultation,
        image: association.Image_du_professionnel ? "Pr\xE9sente" : "Absente"
      });
    });
    for (const association of associations) {
      const aidantId = `association-${association.id}`;
      const aidantRef = doc(db, "users", aidantId);
      const hasImage = association.Image_du_professionnel ? true : false;
      const userData = {
        pseudo_utilisateur: association.nom_personne || "Professionnel",
        is_volunteer: true,
        is_association: true,
        role: "volunteer",
        bio: association.biographie_association || "Professionnel disponible pour vous aider.",
        association_id: association.id,
        consultation_modes: association.Mode_de_consultation || [],
        disponibilites: association.Disponibilites || null,
        adresse: association.Adresse || "",
        lien: association.Lien_de_lassociation || "",
        travail: association.Travail_de_la_personne || "",
        has_image: hasImage,
        image_filename: hasImage ? association.Image_du_professionnel : "",
        updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        volunteer_type: "association"
      };
      await setDoc(aidantRef, userData, { merge: true });
      console.log(
        `Association ${association.id} synchronis\xE9e avec Firebase comme aidant ${aidantId}`
      );
    }
  } catch (error) {
    console.error("Erreur lors de la synchronisation des associations:", error);
  }
  console.log("D\xE9marrage de la r\xE9cup\xE9ration des aidants depuis Firebase...");
  let volunteers = [];
  try {
    const usersRef = collection(db, "users");
    let q = query(usersRef, where("is_volunteer", "==", true));
    const volunteersSnapshot = await getDocs(q);
    console.log(
      "R\xE9sultat brut de Firebase:",
      volunteersSnapshot.docs.map((doc2) => ({ id: doc2.id, ...doc2.data() }))
    );
    if (volunteersSnapshot.empty) {
      console.log("Aucun aidant trouv\xE9 dans Firebase");
    } else {
      volunteers = volunteersSnapshot.docs.filter((doc2) => doc2.id !== currentUserId).map((doc2) => ({
        id: doc2.id,
        ...doc2.data()
      }));
      console.log(`${volunteers.length} aidants r\xE9cup\xE9r\xE9s depuis Firebase`);
      const associationCount = volunteers.filter(
        (v) => v.is_association === true || v.id.startsWith("association-")
      ).length;
      const benevoleCount = volunteers.length - associationCount;
      console.log(
        `Dont ${associationCount} associations et ${benevoleCount} b\xE9n\xE9voles`
      );
    }
    let allVolunteers = [...volunteers];
    for (const association of associations) {
      const aidantId = `association-${association.id}`;
      const alreadyExists = allVolunteers.some((v) => v.id === aidantId);
      if (!alreadyExists) {
        console.log(
          `Ajout direct de l'association ${association.id} (${association.nom_personne})`
        );
        allVolunteers.push({
          id: aidantId,
          pseudo_utilisateur: association.nom_personne || "Professionnel",
          is_volunteer: true,
          is_association: true,
          role: "volunteer",
          bio: association.biographie_association || "Professionnel disponible pour vous aider.",
          association_id: association.id,
          consultation_modes: association.Mode_de_consultation || [],
          disponibilites: association.Disponibilites || null,
          adresse: association.Adresse || "",
          lien: association.Lien_de_lassociation || "",
          travail: association.Travail_de_la_personne || "",
          has_image: association.Image_du_professionnel ? true : false,
          image_filename: association.Image_du_professionnel || "",
          volunteer_type: "association"
        });
      }
    }
    volunteers = allVolunteers;
    console.log(
      `Liste finale d'aidants: ${volunteers.length} (dont ${associations.length} associations en tout)`
    );
    if (volunteers.length === 0) {
      console.log("Aucun aidant disponible, cr\xE9ation d'un aidant de test");
      const testAidantId = "aidant-test-" + Date.now();
      const testAidantRef = doc(db, "users", testAidantId);
      await setDoc(testAidantRef, {
        pseudo_utilisateur: "Aidant Test",
        is_volunteer: true,
        is_association: false,
        role: "volunteer",
        bio: "Ceci est un aidant de test cr\xE9\xE9 automatiquement.",
        volunteer_type: "benevole"
      });
      volunteers.push({
        id: testAidantId,
        pseudo_utilisateur: "Aidant Test",
        is_volunteer: true,
        is_association: false,
        role: "volunteer",
        bio: "Ceci est un aidant de test cr\xE9\xE9 automatiquement.",
        volunteer_type: "benevole"
      });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la r\xE9cup\xE9ration des aidants depuis Firebase:",
      error
    );
  }
  let existingConversationsMap = {};
  try {
    const conversationsRef = collection(db, "conversations");
    const q = query(
      conversationsRef,
      where("type", "==", "help"),
      where("participants", "array-contains", currentUserId)
    );
    const conversationsSnapshot = await getDocs(q);
    for (const doc2 of conversationsSnapshot.docs) {
      const conversation = doc2.data();
      const volunteerParticipant = conversation.participants.find(
        (id) => id !== currentUserId
      );
      if (volunteerParticipant) {
        existingConversationsMap[volunteerParticipant] = doc2.id;
      }
    }
    console.log(
      `${Object.keys(existingConversationsMap).length} conversations existantes trouv\xE9es`
    );
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des conversations:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layoutapp, { "data-astro-cid-g7fzmiez": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-0 sm:px-4 py-0 sm:py-6 max-w-6xl" data-astro-cid-g7fzmiez> <div class="bg-white shadow-sm mb-4 sm:mb-6 sm:static sm:shadow-none sm:bg-transparent sm:rounded-lg sm:px-0" data-astro-cid-g7fzmiez> <div class="flex items-center justify-between p-4 sm:px-0 sm:py-2" data-astro-cid-g7fzmiez> <div class="flex items-center" data-astro-cid-g7fzmiez> <a href="/accueil-app" class="text-primary hover:underline flex items-center mr-3" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g7fzmiez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-g7fzmiez></path> </svg> <span class="text-sm sm:text-base" data-astro-cid-g7fzmiez>Retour</span> </a> <h1 class="text-lg sm:text-2xl font-bold text-primary flex items-center" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 mr-1 sm:mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g7fzmiez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-g7fzmiez></path> </svg> <span class="text-nowrap" data-astro-cid-g7fzmiez>Aidants</span> </h1> </div> <div class="relative hidden sm:block" data-astro-cid-g7fzmiez> <input type="text" id="search-volunteers-desktop" placeholder="Rechercher un aidant..." class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary w-64" data-astro-cid-g7fzmiez> <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-astro-cid-g7fzmiez></path> </svg> </div> </div> </div> <div class="px-4 pb-3 sm:hidden" data-astro-cid-g7fzmiez> <div class="relative" data-astro-cid-g7fzmiez> <input type="text" id="search-volunteers-mobile" placeholder="Rechercher un aidant..." class="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-white" data-astro-cid-g7fzmiez> <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-astro-cid-g7fzmiez></path> </svg> </div> </div> </div> <div class="flex border-t sm:hidden" data-astro-cid-g7fzmiez> <a href="/messages/prives" class="flex-1 py-3 text-center text-gray-500 hover:text-primary font-medium text-sm" data-astro-cid-g7fzmiez>
Messages privés
</a> <a href="/messages/aide" class="flex-1 py-3 text-center text-secondary border-b-2 border-secondary font-medium text-sm" data-astro-cid-g7fzmiez>
Aide
</a> </div> </div> <div class="px-3 sm:px-0" data-astro-cid-g7fzmiez> <div class="hidden sm:flex mb-6 border-b" data-astro-cid-g7fzmiez> <a href="/messages/prives" class="px-6 py-3 text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary font-medium" data-astro-cid-g7fzmiez>
Messages privés
</a> <a href="/messages/aide" class="px-6 py-3 text-secondary border-b-2 border-secondary font-medium" aria-current="page" data-astro-cid-g7fzmiez>
Trouver de l'aide
</a> </div> <div class="bg-gray-50 p-4 sm:p-5 border-b sm:bg-white sm:rounded-t-lg sm:shadow-lg" data-astro-cid-g7fzmiez> <div class="flex items-start" data-astro-cid-g7fzmiez> <div class="p-2 bg-secondary/10 rounded-full mr-3 sm:mr-4 hidden sm:block" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g7fzmiez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-g7fzmiez></path> </svg> </div> <div data-astro-cid-g7fzmiez> <h2 class="text-base sm:text-lg font-semibold text-gray-800 flex items-center" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-secondary sm:hidden" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" data-astro-cid-g7fzmiez></path> </svg>
Besoin de soutien ?
</h2> <p class="text-gray-600 mt-1 max-w-2xl text-sm sm:text-base" data-astro-cid-g7fzmiez>
Nos aidants bénévoles et professionnels sont disponibles pour vous
              écouter et vous accompagner.
</p> </div> </div> </div>  ${volunteers.length === 0 && renderTemplate`<div class="text-center py-8 sm:py-12 px-4 bg-white sm:shadow-lg" data-astro-cid-g7fzmiez> <div class="bg-yellow-50 p-4 sm:p-6 rounded-xl max-w-lg mx-auto" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 sm:h-12 w-10 sm:w-12 mx-auto text-yellow-500 mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g7fzmiez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-g7fzmiez></path> </svg> <p class="text-gray-700 font-medium text-base sm:text-lg" data-astro-cid-g7fzmiez>
Aucun aidant disponible pour le moment
</p> <p class="text-xs sm:text-sm mt-2 text-gray-600" data-astro-cid-g7fzmiez>
Cela peut être dû à un problème technique ou à l'absence
                d'aidants enregistrés. Réessayez plus tard.
</p> </div> </div>`}  ${volunteers.length > 0 && renderTemplate`<div class="bg-white sm:shadow-lg sm:rounded-b-lg sm:overflow-hidden" data-astro-cid-g7fzmiez>  <div class="sm:hidden divide-y divide-gray-100" data-astro-cid-g7fzmiez> ${volunteers.map((volunteer) => {
    const hasExistingConversation = volunteer.id in existingConversationsMap;
    const conversationUrl = hasExistingConversation ? `/messages/aide/${volunteer.id}?conv=${existingConversationsMap[volunteer.id]}` : `/messages/aide/${volunteer.id}`;
    const status = Math.random() > 0.5 ? "online" : "offline";
    const isAssociation = volunteer.is_association === true || volunteer.volunteer_type === "association" || volunteer.id.startsWith("association-") || volunteer.association_id;
    return renderTemplate`<div class="p-4 volunteer-card"${addAttribute(isAssociation ? "association" : "volunteer", "data-type")} data-astro-cid-g7fzmiez> <div class="flex items-start" data-astro-cid-g7fzmiez> <div class="relative flex-shrink-0" data-astro-cid-g7fzmiez> <div class="w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-secondary flex items-center justify-center" data-astro-cid-g7fzmiez> ${isAssociation && volunteer.image_filename ? renderTemplate`<img${addAttribute(`https://echosafe.eloishenry.fr/api/files/association/${volunteer.association_id}/${volunteer.image_filename}`, "src")}${addAttribute(volunteer.pseudo_utilisateur, "alt")} class="w-full h-full object-cover"${addAttribute(`this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<span class="text-secondary text-xl font-semibold flex items-center justify-center w-full h-full">' + (this.alt ? this.alt.charAt(0) : 'P') + '</span>';`, "onError")} data-astro-cid-g7fzmiez>` : renderTemplate`<span class="text-secondary text-xl font-semibold" data-astro-cid-g7fzmiez> ${volunteer.pseudo_utilisateur?.charAt(0) || (isAssociation ? "P" : "A")} </span>`} </div> <div${addAttribute(`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${status === "online" ? "bg-green-500" : "bg-gray-400"}`, "class")} data-astro-cid-g7fzmiez></div> </div> <div class="ml-4 flex-1" data-astro-cid-g7fzmiez> <div class="flex items-center flex-wrap mb-1" data-astro-cid-g7fzmiez> <h3 class="font-semibold text-gray-800 text-base" data-astro-cid-g7fzmiez> ${volunteer.pseudo_utilisateur || "Aidant"} </h3> <span class="ml-2 px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xxs" data-astro-cid-g7fzmiez> ${isAssociation ? "Professionnel" : "B\xE9n\xE9vole"} </span> </div> ${volunteer.travail && renderTemplate`<p class="text-xs text-gray-600 mb-1" data-astro-cid-g7fzmiez> ${volunteer.travail} </p>`} <p class="text-xs text-gray-500 flex items-center mb-2" data-astro-cid-g7fzmiez> <span${addAttribute(`inline-block w-2 h-2 rounded-full mr-1.5 ${status === "online" ? "bg-green-500" : "bg-gray-400"}`, "class")} data-astro-cid-g7fzmiez></span> ${status === "online" ? "Disponible" : "Hors ligne"} </p> <p class="text-xs text-gray-600 italic mb-3 line-clamp-2" data-astro-cid-g7fzmiez>
"
${volunteer.bio || "Disponible pour vous aider et vous \xE9couter."}
"
</p> <a${addAttribute(conversationUrl, "href")} class="flex items-center justify-center w-full py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium text-sm" data-astro-cid-g7fzmiez> ${hasExistingConversation ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-g7fzmiez": true }, { "default": async ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" data-astro-cid-g7fzmiez></path> </svg>
Continuer la discussion
` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-g7fzmiez": true }, { "default": async ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" data-astro-cid-g7fzmiez></path> <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" data-astro-cid-g7fzmiez></path> </svg>
Démarrer une discussion
` })}`} </a> </div> </div> </div>`;
  })} </div>  <div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6" id="volunteers-grid" data-astro-cid-g7fzmiez> ${volunteers.map((volunteer) => {
    const hasExistingConversation = volunteer.id in existingConversationsMap;
    const conversationUrl = hasExistingConversation ? `/messages/aide/${volunteer.id}?conv=${existingConversationsMap[volunteer.id]}` : `/messages/aide/${volunteer.id}`;
    const status = Math.random() > 0.5 ? "online" : "offline";
    const isAssociation = volunteer.is_association === true || volunteer.volunteer_type === "association" || volunteer.id.startsWith("association-") || volunteer.association_id;
    return renderTemplate`<div class="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 volunteer-card"${addAttribute(isAssociation ? "association" : "volunteer", "data-type")} data-astro-cid-g7fzmiez> <div class="p-5" data-astro-cid-g7fzmiez> <div class="flex items-center mb-4" data-astro-cid-g7fzmiez> <div class="relative" data-astro-cid-g7fzmiez> <div class="w-14 h-14 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border-2 border-secondary flex items-center justify-center" data-astro-cid-g7fzmiez> ${isAssociation && volunteer.image_filename ? renderTemplate`<img${addAttribute(`https://echosafe.eloishenry.fr/api/files/association/${volunteer.association_id}/${volunteer.image_filename}`, "src")}${addAttribute(volunteer.pseudo_utilisateur, "alt")} class="w-full h-full object-cover"${addAttribute(`this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<span class="text-secondary text-xl font-semibold flex items-center justify-center w-full h-full">' + (this.alt ? this.alt.charAt(0) : 'P') + '</span>';`, "onError")} data-astro-cid-g7fzmiez>` : renderTemplate`<span class="text-secondary text-xl font-semibold" data-astro-cid-g7fzmiez> ${volunteer.pseudo_utilisateur?.charAt(0) || (isAssociation ? "P" : "A")} </span>`} </div> <div${addAttribute(`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${status === "online" ? "bg-green-500" : "bg-gray-400"}`, "class")} data-astro-cid-g7fzmiez></div> </div> <div class="ml-4" data-astro-cid-g7fzmiez> <div class="flex items-center flex-wrap" data-astro-cid-g7fzmiez> <h3 class="font-semibold text-gray-800 text-lg" data-astro-cid-g7fzmiez> ${volunteer.pseudo_utilisateur || "Aidant"} </h3> <span class="ml-2 px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs" data-astro-cid-g7fzmiez> ${isAssociation ? "Professionnel" : "B\xE9n\xE9vole"} </span> </div> ${volunteer.travail && renderTemplate`<p class="text-sm text-gray-600" data-astro-cid-g7fzmiez> ${volunteer.travail} </p>`} <p class="text-sm text-gray-500 flex items-center" data-astro-cid-g7fzmiez> <span${addAttribute(`inline-block w-2 h-2 rounded-full mr-1.5 ${status === "online" ? "bg-green-500" : "bg-gray-400"}`, "class")} data-astro-cid-g7fzmiez></span> ${status === "online" ? "Disponible" : "Hors ligne"} </p> </div> </div> <div class="bg-gray-50 rounded-lg p-3 mb-4 max-h-20 overflow-hidden" data-astro-cid-g7fzmiez> <p class="text-sm text-gray-600 italic line-clamp-3" data-astro-cid-g7fzmiez>
"
${volunteer.bio || "Disponible pour vous aider et vous \xE9couter."}
"
</p> </div> ${isAssociation && volunteer.consultation_modes && volunteer.consultation_modes.length > 0 && renderTemplate`<div class="mb-4" data-astro-cid-g7fzmiez> <p class="text-sm font-medium text-gray-700 mb-1" data-astro-cid-g7fzmiez>
Modes de consultation :
</p> <div class="flex flex-wrap gap-1" data-astro-cid-g7fzmiez> ${Array.isArray(volunteer.consultation_modes) && volunteer.consultation_modes.map((mode) => renderTemplate`<span class="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs" data-astro-cid-g7fzmiez> ${mode} </span>`)} </div> </div>`} ${volunteer.adresse && renderTemplate`<div class="mb-4" data-astro-cid-g7fzmiez> <p class="text-sm font-medium text-gray-700 mb-1" data-astro-cid-g7fzmiez>
Adresse :
</p> <p class="text-sm text-gray-600" data-astro-cid-g7fzmiez> ${volunteer.adresse} </p> </div>`} <a${addAttribute(conversationUrl, "href")} class="flex items-center justify-center w-full py-2.5 px-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium text-base" data-astro-cid-g7fzmiez> ${hasExistingConversation ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-g7fzmiez": true }, { "default": async ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" data-astro-cid-g7fzmiez></path> </svg>
Continuer la discussion
` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-g7fzmiez": true }, { "default": async ($$result3) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-g7fzmiez> <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" data-astro-cid-g7fzmiez></path> <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" data-astro-cid-g7fzmiez></path> </svg>
Démarrer une discussion
` })}`} </a> ${volunteer.lien && renderTemplate`<a${addAttribute(volunteer.lien, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full py-2 px-4 bg-white text-secondary border border-secondary rounded-lg hover:bg-secondary/5 transition-colors font-medium text-sm mt-2" data-astro-cid-g7fzmiez> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-g7fzmiez> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-g7fzmiez></path> </svg>
Visiter le site
</a>`} </div> </div>`;
  })} </div> </div>`} </div> </div> ` })} ${renderScript($$result, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/aide/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/aide/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/messages/aide/index.astro";
const $$url = "/messages/aide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
