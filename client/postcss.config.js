import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss,      // ✅ Function call, not object property
    autoprefixer,     // ✅ Function call, not object property
  ],
};


