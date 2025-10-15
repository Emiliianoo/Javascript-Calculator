import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // simula navegador
    setupFiles: "./src/setupTests.js",
    css: true, // permite importar CSS en pruebas
    globals: true, // (opcional) habilita describe/test/expect globales
  },
});
