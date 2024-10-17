/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    mode: 'jit',  // Ensure JIT mode is enabled
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
                "honey": {
                    50: "#fff9ed",
                    100: "#fff2d5",
                    200: "#ffe2aa",
                    300: "#ffcb72",
                    400: "#fdaa3a",
                    500: "#fc9013",
                    600: "#ed7309",
                    700: "#c4570a",
                    800: "#9c4410",
                    900: "#7d3911",
                    950: "#441c06",
                },
            },
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
