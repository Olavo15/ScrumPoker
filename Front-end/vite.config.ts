import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    fs: {
      allow: [
        "/home/olavo/Documentos/ScrumPoker/Front-end/public",
        "/home/olavo/Documentos/ScrumPoker/Front-end/src",
      ],
    },
  },
});
