import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Port for Vite development server
    host: "0.0.0.0", // Make Vite accessible from other machines on the network
    proxy: {
      // Proxy requests to the API server
      "/api/v1": {
        // target: "http://kanut-server-container:3000", // Rails API server URL --> Use the backend container name
        target: "http://172.18.0.3:3000", // Rails API server URL --> Use the backend container name
        // TODO: If docker network is removed, update the target URL to the backend's IP address
        changeOrigin: true, // Change the origin of the request to the target URL
        // rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1'), // Adjust the path if needed
      },
    },
  },
});
