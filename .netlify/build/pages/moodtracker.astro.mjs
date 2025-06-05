import { c as createAstro, a as createComponent, r as renderTemplate, g as defineScriptVars, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DviQv69v.mjs';
import 'kleur/colors';
import { $ as $$Layoutapp } from '../chunks/Layoutapp_5LaSD89_.mjs';
import PocketBase from 'pocketbase';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://echosafe.eloishenry.fr/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const moodSVGs = {
    "Tr\xE8s heureux": "/src/assets/moodtracker/tres_heureux.svg",
    Heureux: "/src/assets/moodtracker/heureux.svg",
    Blas\u00E9: "/src/assets/moodtracker/blase.svg",
    Anxieux: "/src/assets/moodtracker/anxieux.svg",
    Triste: "/src/assets/moodtracker/triste.svg",
    Col\u00E8re: "/src/assets/moodtracker/colere.svg",
    "Au bord des larmes": "/src/assets/moodtracker/au-bord-des-larmes.svg"
  };
  const calendarMoodSVGs = {
    "Tr\xE8s heureux": "/src/assets/moodtracker/tres_heureux_calendar.svg",
    Heureux: "/src/assets/moodtracker/heureux_calendar.svg",
    Blas\u00E9: "/src/assets/moodtracker/blase_calendar.svg",
    Anxieux: "/src/assets/moodtracker/anxieux_calendar.svg",
    Triste: "/src/assets/moodtracker/triste_calendar.svg",
    Col\u00E8re: "/src/assets/moodtracker/colere_calendar.svg",
    "Au bord des larmes": "/src/assets/moodtracker/au-bord-des-larmes_calendar.svg"
  };
  const pb = new PocketBase("https://echosafe.eloishenry.fr");
  const authCookie = Astro2.request.headers.get("cookie");
  if (authCookie) {
    pb.authStore.loadFromCookie(authCookie);
  }
  if (!pb.authStore.isValid) {
    return Astro2.redirect("/auth/connexion");
  }
  const today = /* @__PURE__ */ new Date();
  const todayFormatted = today.toISOString().split("T")[0];
  let message = "";
  let messageType = "";
  let showToast = false;
  if (Astro2.request.method === "POST") {
    try {
      const isAjax = Astro2.request.headers.get("X-Requested-With") === "XMLHttpRequest";
      const formData = await Astro2.request.formData();
      const nomMoodtracker = formData.get("nom_moodtracker") || "";
      const humeurMoodtracker = formData.get("humeur_moodtracker");
      const dateMoodtracker = formData.get("date_moodtracker") || todayFormatted;
      console.log("Donn\xE9es du formulaire:", {
        nom: nomMoodtracker,
        humeur: humeurMoodtracker,
        date: dateMoodtracker,
        user: pb.authStore.model?.id
      });
      if (humeurMoodtracker) {
        if (!pb.authStore.isValid) {
          message = "Votre session a expir\xE9, veuillez vous reconnecter.";
          messageType = "error";
          if (isAjax) {
            return new Response(
              JSON.stringify({
                success: false,
                message,
                type: messageType
              }),
              {
                status: 401,
                headers: {
                  "Content-Type": "application/json"
                }
              }
            );
          }
          showToast = true;
          return;
        }
        const existingEntries = await pb.collection("moodtracker").getList(1, 1, {
          filter: `user = "${pb.authStore.model?.id}" && date_moodtracker = "${dateMoodtracker}"`
        });
        const data = {
          nom_moodtracker: nomMoodtracker ? `${nomMoodtracker} [humeur:${humeurMoodtracker}]` : `[humeur:${humeurMoodtracker}]`,
          date_moodtracker: dateMoodtracker,
          user: pb.authStore.model?.id,
          created: (/* @__PURE__ */ new Date()).toISOString()
        };
        console.log("Donn\xE9es \xE0 enregistrer:", data);
        if (existingEntries.items.length > 0) {
          await pb.collection("moodtracker").update(existingEntries.items[0].id, data);
          message = "Votre humeur a \xE9t\xE9 mise \xE0 jour avec succ\xE8s !";
        } else {
          await pb.collection("moodtracker").create(data);
          message = "Votre humeur a \xE9t\xE9 enregistr\xE9e avec succ\xE8s !";
        }
        messageType = "success";
        if (isAjax) {
          return new Response(
            JSON.stringify({
              success: true,
              message,
              type: messageType,
              mood: humeurMoodtracker,
              date: dateMoodtracker
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
        showToast = true;
      } else {
        message = "Veuillez s\xE9lectionner une humeur.";
        messageType = "error";
        if (isAjax) {
          return new Response(
            JSON.stringify({
              success: false,
              message,
              type: messageType
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
        showToast = true;
      }
    } catch (error) {
      console.error("Erreur d\xE9taill\xE9e:", error);
      message = "Une erreur s'est produite lors de l'enregistrement.";
      messageType = "error";
      if (Astro2.request.headers.get("X-Requested-With") === "XMLHttpRequest") {
        return new Response(
          JSON.stringify({
            success: false,
            message,
            type: messageType,
            error: error.toString()
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
      showToast = true;
    }
  }
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const firstDayFormatted = firstDayOfMonth.toISOString().split("T")[0];
  const lastDayFormatted = lastDayOfMonth.toISOString().split("T")[0];
  let monthlyEntries = [];
  try {
    const records = await pb.collection("moodtracker").getList(1, 100, {
      filter: `user = "${pb.authStore.model?.id}" && date_moodtracker >= "${firstDayFormatted}" && date_moodtracker <= "${lastDayFormatted}"`,
      sort: "date_moodtracker"
    });
    monthlyEntries = records.items;
  } catch (error) {
    console.error(
      "Erreur lors de la r\xE9cup\xE9ration des donn\xE9es mensuelles:",
      error
    );
  }
  const moodsByDate = {};
  monthlyEntries.forEach((entry) => {
    const dateParts = entry.date_moodtracker.split("-");
    const day = parseInt(dateParts[2], 10);
    let mood = "";
    let description = entry.nom_moodtracker || "";
    const humeurMatch = description.match(/\[humeur:(.*?)\]/);
    if (humeurMatch && humeurMatch[1]) {
      mood = humeurMatch[1];
      description = description.replace(/\[humeur:.*?\]/, "").trim();
    }
    moodsByDate[day] = {
      mood,
      description
    };
  });
  const moodEmojis = {
    "Tr\xE8s heureux": "\u{1F604}",
    Heureux: "\u{1F642}",
    Blas\u00E9: "\u{1F610}",
    Anxieux: "\u{1F630}",
    Triste: "\u{1F622}",
    Col\u00E8re: "\u{1F621}",
    "Au bord des larmes": "\u{1F62D}"
  };
  const moodNames = [
    "Tr\xE8s heureux",
    "Heureux",
    "Blas\xE9",
    "Anxieux",
    "Triste",
    "Col\xE8re",
    "Au bord des larmes"
  ];
  const moodColors = {
    "Tr\xE8s heureux": {
      color: "text-green-500",
      bgColor: "bg-green-100",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    },
    Heureux: {
      color: "text-green-400",
      bgColor: "bg-green-50",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    },
    Blas\u00E9: {
      color: "text-gray-400",
      bgColor: "bg-gray-50",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    },
    Anxieux: {
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    },
    Triste: {
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    },
    Col\u00E8re: {
      color: "text-red-500",
      bgColor: "bg-red-50",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    },
    "Au bord des larmes": {
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-primary",
      lightBg: "bg-[#E2EEFF]"
    }
  };
  const moods = moodNames.map((name) => {
    return {
      value: name,
      svg: moodSVGs[name],
      emoji: moodEmojis[name],
      ...moodColors[name]
    };
  });
  const monthNames = [
    "Janvier",
    "F\xE9vrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Ao\xFBt",
    "Septembre",
    "Octobre",
    "Novembre",
    "D\xE9cembre"
  ];
  const currentMonth = monthNames[today.getMonth()];
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("moodSlider");
    const slides = document.querySelectorAll(".mood-slide");
    const prevBtn = document.getElementById("prevMood");
    const nextBtn = document.getElementById("nextMood");
    const indicators = document
      .getElementById("moodIndicators")
      .querySelectorAll("button");
    const selectedMoodInput = document.getElementById("selectedMood");
    const submitButton = document.getElementById("submitButton");
    const selectedMoodName = document.getElementById("selectedMoodName");
    const nomInput = document.getElementById("nom_moodtracker");
    const dateInput = document.getElementById("date_moodtracker");

    function showToastNotification(message, type = "success") {
      const toast = document.getElementById("toast");
      const toastMessage = document.getElementById("toast-message");
      const toastIcon = document.getElementById("toast-icon");
      const toastIconContainer = document.getElementById(
        "toast-icon-container"
      );

      toastMessage.textContent = message;

      if (type === "success") {
        toast.classList.add("text-green-800");
        toastIconContainer.classList.add("text-green-500", "bg-green-100");
        toastIcon.innerHTML =
          '<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>';
      } else {
        toast.classList.add("text-red-800");
        toastIconContainer.classList.add("text-red-500", "bg-red-100");
        toastIcon.innerHTML =
          '<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>';
      }

      toast.classList.remove("translate-x-full");

      setTimeout(() => {
        toast.classList.add("translate-x-full");

        setTimeout(() => {
          toast.classList.remove("text-green-800", "text-red-800");
          toastIconContainer.classList.remove(
            "text-green-500",
            "bg-green-100",
            "text-red-500",
            "bg-red-100"
          );
        }, 300);
      }, 5000);
    }

    if (showToast && message) {
      showToastNotification(message, messageType);
    }

    let currentIndex = 0;
    const moods = [
      "Tr\xE8s heureux",
      "Heureux",
      "Blas\xE9",
      "Anxieux",
      "Triste",
      "Col\xE8re",
      "Au bord des larmes",
    ];

    function updateCarousel() {
      const translateValue = -currentIndex * 100 + "%";
      slider.style.transform = \`translateX(\${translateValue})\`;

      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add("bg-primary");
          indicator.classList.remove("bg-gray-300");
        } else {
          indicator.classList.add("bg-gray-300");
          indicator.classList.remove("bg-primary");
        }
      });

      const currentMood = moods[currentIndex];
      selectedMoodInput.value = currentMood;
      selectedMoodName.textContent = currentMood;

      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add("scale-105", "transition-transform");
        } else {
          slide.classList.remove("scale-105", "transition-transform");
        }
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    const carousel = document.getElementById("moodCarousel");

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const threshold = 50; 

      if (touchEndX + threshold < touchStartX) {
        nextBtn.click();
      } else if (touchEndX > touchStartX + threshold) {
        prevBtn.click();
      }
    }

    dateInput.addEventListener("change", () => {
      selectedMoodInput.value = moods[currentIndex];
    });

    const form = document.getElementById("moodForm");

    form.addEventListener("submit", async function (e) {
      e.preventDefault(); 

      selectedMoodInput.value = moods[currentIndex];

      const formData = new FormData(form);

      try {
        const response = await fetch(window.location.href, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        if (response.ok) {
          const result = await response.json();

          showToastNotification(
            result.message || "Humeur enregistr\xE9e avec succ\xE8s",
            result.type || "success"
          );

          if (result.success) {
          }
        } else {
          showToastNotification("Une erreur s'est produite", "error");
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi:", error);
        showToastNotification("Une erreur s'est produite", "error");
      }
    });

    updateCarousel();
  });
})();<\/script>`], ["", " <script>(function(){", `
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("moodSlider");
    const slides = document.querySelectorAll(".mood-slide");
    const prevBtn = document.getElementById("prevMood");
    const nextBtn = document.getElementById("nextMood");
    const indicators = document
      .getElementById("moodIndicators")
      .querySelectorAll("button");
    const selectedMoodInput = document.getElementById("selectedMood");
    const submitButton = document.getElementById("submitButton");
    const selectedMoodName = document.getElementById("selectedMoodName");
    const nomInput = document.getElementById("nom_moodtracker");
    const dateInput = document.getElementById("date_moodtracker");

    function showToastNotification(message, type = "success") {
      const toast = document.getElementById("toast");
      const toastMessage = document.getElementById("toast-message");
      const toastIcon = document.getElementById("toast-icon");
      const toastIconContainer = document.getElementById(
        "toast-icon-container"
      );

      toastMessage.textContent = message;

      if (type === "success") {
        toast.classList.add("text-green-800");
        toastIconContainer.classList.add("text-green-500", "bg-green-100");
        toastIcon.innerHTML =
          '<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>';
      } else {
        toast.classList.add("text-red-800");
        toastIconContainer.classList.add("text-red-500", "bg-red-100");
        toastIcon.innerHTML =
          '<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>';
      }

      toast.classList.remove("translate-x-full");

      setTimeout(() => {
        toast.classList.add("translate-x-full");

        setTimeout(() => {
          toast.classList.remove("text-green-800", "text-red-800");
          toastIconContainer.classList.remove(
            "text-green-500",
            "bg-green-100",
            "text-red-500",
            "bg-red-100"
          );
        }, 300);
      }, 5000);
    }

    if (showToast && message) {
      showToastNotification(message, messageType);
    }

    let currentIndex = 0;
    const moods = [
      "Tr\xE8s heureux",
      "Heureux",
      "Blas\xE9",
      "Anxieux",
      "Triste",
      "Col\xE8re",
      "Au bord des larmes",
    ];

    function updateCarousel() {
      const translateValue = -currentIndex * 100 + "%";
      slider.style.transform = \\\`translateX(\\\${translateValue})\\\`;

      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add("bg-primary");
          indicator.classList.remove("bg-gray-300");
        } else {
          indicator.classList.add("bg-gray-300");
          indicator.classList.remove("bg-primary");
        }
      });

      const currentMood = moods[currentIndex];
      selectedMoodInput.value = currentMood;
      selectedMoodName.textContent = currentMood;

      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add("scale-105", "transition-transform");
        } else {
          slide.classList.remove("scale-105", "transition-transform");
        }
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    const carousel = document.getElementById("moodCarousel");

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const threshold = 50; 

      if (touchEndX + threshold < touchStartX) {
        nextBtn.click();
      } else if (touchEndX > touchStartX + threshold) {
        prevBtn.click();
      }
    }

    dateInput.addEventListener("change", () => {
      selectedMoodInput.value = moods[currentIndex];
    });

    const form = document.getElementById("moodForm");

    form.addEventListener("submit", async function (e) {
      e.preventDefault(); 

      selectedMoodInput.value = moods[currentIndex];

      const formData = new FormData(form);

      try {
        const response = await fetch(window.location.href, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        if (response.ok) {
          const result = await response.json();

          showToastNotification(
            result.message || "Humeur enregistr\xE9e avec succ\xE8s",
            result.type || "success"
          );

          if (result.success) {
          }
        } else {
          showToastNotification("Une erreur s'est produite", "error");
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi:", error);
        showToastNotification("Une erreur s'est produite", "error");
      }
    });

    updateCarousel();
  });
})();<\/script>`])), renderComponent($$result, "Layoutapp", $$Layoutapp, { "title": "Mood Tracker" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="POST" id="moodForm" class="min-h-screen py-8 px-4 pb-28"> <div class="max-w-4xl mx-auto"> <div class="text-center"> <h1 class="text-4xl font-bold mb-2">Mood Tracker</h1> <p class="text-lg">Suivez votre humeur au quotidien</p> </div> <div class="bg-white rounded-2xl p-8 mb-8"> <div class="relative">
* <button type="button" id="prevMood" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-[5] bg-white rounded-full p-2 shadow-md hover:text-primary focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <div class="overflow-hidden px-10" id="moodCarousel"> <div class="flex transition-transform duration-300 ease-in-out" id="moodSlider"> ${moods.map((mood, index) => renderTemplate`<div class="mood-slide flex-shrink-0 w-full flex flex-col items-center"${addAttribute(index, "data-index")}${addAttribute(mood.value, "data-mood")}> <div class="w-35 h-35 rounded-full flex items-center justify-center mx-auto mb-4 bg-white shadow-md"> <img${addAttribute(mood.svg, "src")}${addAttribute(mood.value, "alt")} class="w-20 h-20 object-contain"${addAttribute(`this.onerror=null; this.parentNode.innerHTML='<span class="text-6xl">${mood.emoji}</span>'`, "onerror")}> </div> <div${addAttribute(`text-xl font-semibold text-center ${mood.textColor}`, "class")}> ${mood.value} </div> </div>`)} </div> </div> <button type="button" id="nextMood" class="absolute right-0 top-1/2 transform -translate-y-1/2 z-[5] bg-white rounded-full p-2 shadow-md hover:text-primary focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <div class="flex justify-center mt-4 space-x-2" id="moodIndicators"> ${moods.map((_, index) => renderTemplate`<button type="button" class="w-3 h-3 rounded-full bg-gray-300 transition-colors duration-200"${addAttribute(index, "data-index")}${addAttribute(`S\xE9lectionner l'humeur ${index + 1}`, "aria-label")}></button>`)} </div> <input type="hidden" name="humeur_moodtracker" id="selectedMood" required> <div class="text-center mt-4"> <div id="selectedMoodConfirmation" class="text-sm text-primary">
Humeur sélectionnée: <span id="selectedMoodName" class="font-medium"></span> </div> </div> </div> </div> <div class="mb-6"> <label for="nom_moodtracker" class="block text-sm font-medium mb-2">
Décrivez votre journée (optionnel)
</label> <input type="text" id="nom_moodtracker" name="nom_moodtracker" placeholder="Ex: Journée au travail, sortie entre amis..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"> </div> <div class="mb-6"> <label for="date_moodtracker" class="block text-sm font-medium mb-2">
Date
</label> <input type="date" id="date_moodtracker" name="date_moodtracker"${addAttribute(todayFormatted, "value")}${addAttribute(todayFormatted, "max")} class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"> </div> <button type="submit" id="submitButton" class="inline-flex items-center justify-center gap-2 text-white border-1 border-[var(--color-primary)] font-normal rounded-3xl transition duration-300 ease-in-out px-8 py-4 text-base bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] w-full">
Enregistrer mon humeur
</button> </div> <div class="max-w-4xl mx-auto mt-15"> <div class="bg-white rounded-2xl p-1"> <h2 class="text-2xl font-semibold mb-6 text-center"> ${currentMonth} ${today.getFullYear()} </h2> <div class="mb-6"> <div class="grid grid-cols-7 gap-3 mb-3"> <div class="text-center font-medium text-lg">Lun</div> <div class="text-center font-medium text-lg">Mar</div> <div class="text-center font-medium text-lg">Mer</div> <div class="text-center font-medium text-lg">Jeu</div> <div class="text-center font-medium text-lg">Ven</div> <div class="text-center font-medium text-lg">Sam</div> <div class="text-center font-medium text-lg">Dim</div> </div> <div class="grid grid-cols-7 gap-2"> ${Array.from({ length: firstDayOfWeek }).map(() => renderTemplate`<div class="h-16 p-1 rounded-lg"></div>`)} ${Array.from({ length: daysInMonth }).map((_, index) => {
    const day = index + 1;
    const isToday = day === today.getDate();
    const moodData = moodsByDate[day];
    const mood = moodData?.mood;
    const hasMood = !!mood;
    const moodColor = hasMood ? moodColors[mood]?.lightBg || "" : "";
    return renderTemplate`<div${addAttribute(`h-24 p-1 rounded-lg ${moodColor} ${isToday ? "ring-2 ring-primary" : ""} relative group`, "class")}> <div class="absolute top-1 left-2 text-lg font-bold"> ${" "} ${day} </div> ${hasMood && renderTemplate`<div class="flex flex-col items-center justify-center h-full"> <img${addAttribute(calendarMoodSVGs[mood], "src")}${addAttribute(mood, "alt")} class="w-10 h-10 object-contain mt-2"${addAttribute(`this.onerror=null; this.parentNode.innerHTML='<div class="text-2xl">${moodEmojis[mood]}</div>'`, "onerror")}> </div>`} ${hasMood && moodData.description && renderTemplate`<div class="absolute inset-0 bg-white bg-opacity-95 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-center"> ${moodData.description} </div>`} </div>`;
  })} </div> </div> </div> </div> </form> <div id="toast" class="fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 bg-white rounded-lg shadow-lg transition-transform duration-300 transform translate-x-full z-50" role="alert"> <div id="toast-icon-container" class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"> <svg id="toast-icon" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"></svg> </div> <div id="toast-message" class="ml-3 text-sm font-normal"></div> <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" aria-label="Close" onclick="document.getElementById('toast').classList.add('translate-x-full');"> <span class="sr-only">Fermer</span> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> </button> </div> ` }), defineScriptVars({ message, messageType, showToast }));
}, "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/moodtracker/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/GitHub/projet-co-s2-2025-17_echosafe/src/pages/moodtracker/index.astro";
const $$url = "/moodtracker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
