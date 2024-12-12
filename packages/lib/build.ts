import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';
import litPlugin from 'esbuild-plugin-lit';

import { dependencies, peerDependencies } from './package.json';

esbuild.build({
  entryPoints: ['components/**/index.ts', 'components/**/react.ts'],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  outbase: 'components',
  allowOverwrite: true,
  format: 'esm',
  plugins: [litPlugin(), dtsPlugin({ tsconfig: 'tsconfig.lib.json' })],

  /**
   * The React wrappers import the web component from the index file.
   * We do not want to bundle the web component into the react entry point,
   * so we exclude all imports of "./index" from the bundle.
   */
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies), './index*'],
});
