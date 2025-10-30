// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://lizethcarosilva.github.io/optimizaci-n_riego_agricultura.github.io/',
	base: '/optimizaci-n_riego_agricultura.github.io/',
	vite: { plugins: [tailwind()] }
});
