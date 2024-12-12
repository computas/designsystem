import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const components = {
  'components/tabs/index': 'components/tabs/index.ts',
  'components/icon/index': 'components/icon/icon.ts',
  'components/icon/iconRegistry': 'components/icon/iconRegistry.ts',
};

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: components,
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [/lit.*/, '@lit/context'],
    },
    emptyOutDir: true,
    minify: false,
  },
});
