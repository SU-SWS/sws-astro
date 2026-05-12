import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: confirm later
  site: 'https://sws.stanford.edu',
  // No need to enable prefetch since we use View Transition which sets a default configuration of { prefetchAll: true }
  // https://docs.astro.build/en/guides/prefetch/#using-with-view-transitions
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: 'Source Sans 3',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [400, 600],
      styles: ['normal'],
      fallbacks: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    {
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      provider: fontProviders.google(),
      styles: ['normal'],
      fallbacks: ['Georgia', 'Times', 'Times New Roman', 'serif'],
    },
    {
      name: 'Stanford',
      cssVariable: '--font-stanford',
      provider: fontProviders.local(),
      fallbacks: [],
      options: {
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: [
              './src/assets/fonts/stanford.woff2',
            ],
          },
        ],
      },
    },
  ],
});
