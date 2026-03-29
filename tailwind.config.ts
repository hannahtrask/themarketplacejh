import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["var(--font-display)", "serif"],
                body: ["var(--font-body)", "sans-serif"]
            },
            colors: {
                cream: "#F5F1E8",
                whitewarm: "#FFFBF7",
                orangegold: "#E8B451",
                terracotta: "#C76C4C",
                warmgold: "#D4A574",
                browndark: "#3D3D3A",
                graywarm: "#9E9C94",
                turquoise: "#6BA5A8",
                pinkdusty: "#D48B8B",
                sagesoft: "#8B9E8F"
            },
            boxShadow: {
                card: "0 10px 30px rgba(61, 61, 58, 0.08)"
            },
            backgroundImage: {
                "market-glow": "radial-gradient(circle at top right, rgba(232, 180, 81, 0.2), rgba(255, 251, 247, 0.1) 45%, rgba(245, 241, 232, 0.2) 100%)"
            }
        }
    },
    plugins: []
};

export default config;
