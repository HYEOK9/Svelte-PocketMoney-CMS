import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
// import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  // server: {
  //   host: "local.cms-moneyquiz.cashdoc.io",
  //   https: true,
  //   port: 443,
  // },
  // plugins: [sveltekit(), mkcert()],
  server: { host: "local.cms-moneyquiz.cashdoc.io", port: 80 },
  plugins: [sveltekit(), nodePolyfills()],
});
