import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: "esbuild",
    chunkSizeWarningLimit: 500,
  },
  plugins: [react(), tailwindcss()],
});
