/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",

	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			Bookmania: "Bookmania",
		},

		extend: {
			colors: {
				green: "#51DFAD",
			},
		},
	},
	plugins: [],
};
