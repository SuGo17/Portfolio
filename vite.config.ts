import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local",
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@Hooks": path.resolve(__dirname, "src/Hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@Redux": path.resolve(__dirname, "src/Redux"),
      "@Router": path.resolve(__dirname, "src/Router"),
      "@Styles": path.resolve(__dirname, "src/Styles"),
      "@Utils": path.resolve(__dirname, "src/Utils"),
    },
  },
});
