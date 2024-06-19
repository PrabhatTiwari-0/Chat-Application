import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname } from "path";
import path from "path";

import { fileURLToPath } from "url";

// Get the directory name using import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});