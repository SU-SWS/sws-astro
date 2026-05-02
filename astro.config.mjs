import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    react()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Source Sans 3",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
      weights: [400, 600],
      styles: ["normal", "italic"],
    },
    {
      name: "Source Serif 4",
      cssVariable: "--font-serif",
      provider: fontProviders.fontsource(),
      styles: ["normal"],
    },
    {
      name: "Stanford",
      cssVariable: "--font-stanford",
      provider: fontProviders.local(),
      options: {
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: [
              "./src/assets/fonts/stanford.woff2",
            ]
          },
        ]
      }
    }
  ],
});
