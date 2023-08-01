/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			lineHeight: {
				10.5: "38.4px",
				11: "2.5rem",
				12: "3rem",
			},
		},
	},
	plugins: [],
};
