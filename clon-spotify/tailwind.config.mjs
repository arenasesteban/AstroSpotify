/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'spotify-green': '#3be477',
				'spotify-black': '#000000',
				'spotify-gray': '#1f1f1f',
				'spotify-dark-gray': '#121212',
				'spotify-light-gray': '#b3b3b3',
				'spotify-hover-gray': '#2a2a2a'
			}
		},
	},
	plugins: [],
}
