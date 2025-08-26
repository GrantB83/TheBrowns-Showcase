import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

// Plugin to copy .htaccess file to build output
const copyHtaccessPlugin = () => {
  return {
    name: 'copy-htaccess',
    writeBundle() {
      // Copy .htaccess from root to dist
      if (fs.existsSync('.htaccess')) {
        fs.copyFileSync('.htaccess', 'dist/.htaccess');
        console.log('✅ .htaccess file copied to dist/');
      } else {
        console.warn('⚠️ .htaccess file not found in root directory');
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Performance optimizations
    minify: mode === 'production' ? 'esbuild' : 'esbuild',
    ...(mode === 'production' && {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    }),
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
        },
      },
    },
    sourcemap: mode === 'development',
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    copyHtaccessPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
}));
