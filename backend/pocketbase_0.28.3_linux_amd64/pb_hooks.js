// pb_hooks.js
onBeforeServe((e) => {
    // Configurer CORS pour autoriser votre domaine Netlify
    e.router.cors.allowOrigins = [
        "https://echo-safe1.netlify.app", // Remplacez par votre domaine Netlify réel
        "http://localhost:8090", // Port par défaut de PocketBase
        "http://127.0.0.1:8090",
        "http://localhost:4321", // Port par défaut d'Astro en développement
        // Autres origines au besoin
    ];
    
    // Vous pouvez aussi configurer d'autres paramètres CORS si nécessaire
    e.router.cors.allowHeaders = ["*"];
    e.router.cors.allowMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    e.router.cors.allowCredentials = true;
    e.router.cors.maxAge = 600; // 10 minutes
});