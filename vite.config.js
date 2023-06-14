import { sveltekit } from '@sveltejs/kit/vite';
import dotenvExpand from 'dotenv-expand';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from 'vite-imagetools';

export default defineConfig(({ mode }) => {
	if (mode === 'development') {
		const env = loadEnv(mode, process.cwd(), '');
		dotenvExpand.expand({ parsed: env });
	}
	return {
		plugins: [sveltekit(), imagetools()],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});
