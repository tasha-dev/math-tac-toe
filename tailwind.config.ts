// Codes by mahdi tasha
// Importing part
import type { Config } from "tailwindcss"

// Defining configs of tailwindCSS
const config = {
  content: [
    './app/*.{tsx,ts,js,jsx}',
    './components/ui/*.{tsx,ts,js,jsx}',
    './components/*.{tsx,ts,js,jsx}',
  ],
  theme: {},
  plugins: [],
};

// Exporting the configs
export default config