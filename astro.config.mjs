import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
 integrations: [react(), sitemap()],
  site: "https://www.guilin-yang-shuo.com",
 vite: { plugins: [tailwindcss()] },
  trailingSlash: 'always',
});
