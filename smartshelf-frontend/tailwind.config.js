import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#fdbc13",
        "outline": "#75777c",
        "primary-container": "#1a2634",
        "inverse-surface": "#2e3132",
        "on-secondary-container": "#007354",
        "secondary-fixed-dim": "#3adfab",
        "error-container": "#ffdad6",
        "surface-container-high": "#e7e8e9",
        "primary-fixed-dim": "#bbc7da",
        "on-secondary-fixed-variant": "#00513b",
        "on-primary": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "background": "#f8f9fa",
        "secondary-container": "#60fcc6",
        "surface": "#f8f9fa",
        "outline-variant": "#c4c6cc",
        "on-error": "#ffffff",
        "on-tertiary-fixed": "#261900",
        "primary-fixed": "#d7e3f7",
        "tertiary": "#170e00",
        "inverse-primary": "#bbc7da",
        "tertiary-fixed": "#ffdea3",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#818d9f",
        "on-tertiary-fixed-variant": "#5d4200",
        "inverse-on-surface": "#f0f1f2",
        "on-primary-fixed": "#101c2a",
        "secondary": "#006c4f",
        "surface-container": "#edeeef",
        "on-primary-fixed-variant": "#3c4857",
        "surface-dim": "#d9dadb",
        "surface-container-highest": "#e1e3e4",
        "on-tertiary-container": "#b48400",
        "error": "#ba1a1a",
        "tertiary-container": "#322200",
        "secondary-fixed": "#60fcc6",
        "surface-tint": "#535f6f",
        "on-surface-variant": "#44474c",
        "primary": "#05111e",
        "on-background": "#191c1d",
        "on-secondary": "#ffffff",
        "surface-bright": "#f8f9fa",
        "surface-variant": "#e1e3e4",
        "on-secondary-fixed": "#002116",
        "on-error-container": "#93000a",
        "on-surface": "#191c1d"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
