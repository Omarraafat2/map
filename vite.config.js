import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'kepler.gl': resolve(__dirname, 'node_modules/kepler.gl/dist'),
    },
  },
  // يمكنك إضافة خيارات أخرى حسب الحاجة
});
