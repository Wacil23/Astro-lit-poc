import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Enable Lit to support LitHTML components and templates.
  integrations: [lit(), react(), tailwind()]
});