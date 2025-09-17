import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://georgenizoridis.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: {
    watch: {
      usePolling: true,
      interval: 300
    }
  }
});
