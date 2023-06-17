import { defineConfig } from "histoire";
import { HstSvelte } from "@histoire/plugin-svelte";

export default defineConfig({
  plugins: [HstSvelte()],
  setupFile: "/src/style/global.scss",
  tree: {
    groups: [
      { id: "UI", title: "UI" },
      { id: "layout", title: "layout" },
      { id: "common", title: "common" },
    ],
  },
});
