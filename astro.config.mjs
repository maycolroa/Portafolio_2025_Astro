import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  // Configuración mínima de transiciones
  transitions: {
    // No usar persistencia para evitar conflictos
    persist: [],
    // Mantener la configuración simple
    clientOnly: true
  },
});
