import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  ssr: {
    external: ["reflect-metadata"],
  },
  server: {
    hmr: false,
    allowedHosts: ["www.msp-du-hameau.fr"],
  },
  build: {
    minify: "esbuild",
  },
});
