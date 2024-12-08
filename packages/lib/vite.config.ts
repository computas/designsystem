import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const components = [
  'components/tabs/index.ts',
  'components/tabs/react.ts',
  'components/icon/index.ts',
  'components/icon/react.ts',
];

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: components.map((path) => resolve(__dirname, path)),
      formats: ['es'],
      fileName(format, entryName) {
        const cmpName = entryName.split('/').at(1);
        console.log(entryName, cmpName, format);
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [/lit.*/, '@lit/react', '@lit/context', 'react'],
    },
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
  },
});
