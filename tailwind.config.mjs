/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				skin: {
					"canvas-pri": "#C5E4E7", //Green/blue
					"brand-pri": "#00474B", //Dark Green
					"brand-sec": "#26C2AE", //Light Green
					"brand-tert": "#FFFFFF", //White
					"text-pri": "#5E7A7D", //Gray / Green text
					"text-sec": "#7F9D9F", //Gray text
					"text-dark": "#00474B", //Dark Green
					"text-inverted-white": "#FFFFFF",
					"text-accent": "#26C2AE",
					"input-fill": "#F3F9FA", //Dim Gray
					"button-fill-pri": "#9FE8DF",
					caution: "#E17052",
				},
			},
			fontFamily: {
				fontPri: ["Space Mono", "sans-serif"],
			},
			fontSize: {
				bodyXs: ".8125rem",
				bodyS: "1rem",
				bodyM: "1.25rem",
				bodyL: "1.5rem",
				bodyXL: "3rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
