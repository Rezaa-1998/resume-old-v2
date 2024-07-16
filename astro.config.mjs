import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Rezaa-1998.github.io",
  base: "resume-old-v2",
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
});
