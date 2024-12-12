import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';
import litPlugin from 'esbuild-plugin-lit';

import { dependencies } from './package.json';

esbuild.build({
  entryPoints: ['components/**/(index|react).ts'],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  metafile: true,
  outbase: 'components',
  format: 'esm',
  plugins: [litPlugin(), dtsPlugin({ tsconfig: 'tsconfig.lib.json' })],
  external: [...Object.keys(dependencies)],
});
