// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://echosafe.eloishenry.fr/",
  output: "server",
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.svg"],
    build: {
      rollupOptions: {
        external: ["stripe"],
      },
    },
  },
  adapter: netlify({ edgeMiddleware: true }),
});
