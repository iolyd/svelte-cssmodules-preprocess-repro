import node from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
import { cssModules, linearPreprocess } from 'svelte-preprocess-cssmodules';

const config = {
	preprocess: linearPreprocess([
		sveltePreprocess({
			typescript: true,
			scss: true,
			postcss: true,
		}),
		cssModules({
			mode: 'mixed',
		}),
	]),
};

export default config;
