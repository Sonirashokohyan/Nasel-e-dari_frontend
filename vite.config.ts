import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    host: 'localhost',
    port: 3000,
  },
})
