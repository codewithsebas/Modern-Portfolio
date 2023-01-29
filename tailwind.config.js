/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				text: "text 5s ease infinite",
				bg: "bg 8s ease-in-out infinite",
				bg2: "bg 10s ease infinite",
				bg3: "bg 13s ease-out infinite",
				bubles: "bubles 1s ease-in infinite",
				bubles2: "bubles 1.2s ease-in infinite",
				bubles3: "bubles 1.6s linear infinite",
				bubles4: "bubles 1.5s linear infinite",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				bg: {
					"0%, 100%": {
						transform: "translateY(0%)",
					},
					"50%": {
						transform: "translateY(30%)",
						opacity: "0",
					},
				},
				bg2: {
					"0%, 100%": {
						transform: "translateY(0%)",
					},
					"50%": {
						transform: "translateY(40%)",
						opacity: "0",
					},
				},
				bg3: {
					"0%, 100%": {
						transform: "translateY(0%)",
					},
					"50%": {
						transform: "translateY(40%)",
						opacity: "0",
					},
				},

				bubles: {
					"0%, 100%": {
						transform: "scale(0)",
					},
					"10%": {
						transform: "scale(1)",
						opacity: 1,
					},
					"40%": {
						transform: "scale(2)",
						opacity: 0,
					},
				},

				bubles2: {
					"0%, 100%": {
						transform: "scale(0)",
					},
					"20%": {
						transform: "scale(1)",
						opacity: 0,
					},
					"40%": {
						transform: "scale(3)",
						opacity: 1,
					},
				},

				bubles3: {
					"0%, 100%": {
						transform: "scale(0)",
					},
					"80%": {
						transform: "scale(1)",
					},
					"40%": {
						transform: "scale(2)",
					},
				},

				bubles4: {
					"0%, 100%": {
						transform: "scale(0)",
					},
					"20%": {
						transform: "scale(2)",
					},
					"40%": {
						transform: "scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
};
