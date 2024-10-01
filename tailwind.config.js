/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f2f7f3",
                    100: "#dfecdf",
                    200: "#c2d8c4",
                    300: "#98bd9e",
                    400: "#6c9b76",
                    500: "#4b7e57",
                    600: "#386343",
                    700: "#2c5036",
                    800: "#25402c",
                    900: "#1f3525",
                    950: "#111d15",
                },
            },
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
