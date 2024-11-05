import path from 'node:path';
import { build } from 'tsup';

const componentFolder = path.basename(process.cwd());

await build({
  entry: ['index.ts', 'react.ts'],
  sourcemap: true,
  dts: true,
  format: 'esm',
  target: 'es2021',
  clean: true,
  skipNodeModulesBundle: true, // Don't bundle dependencies into the components
  outDir: `../../../dist/${componentFolder}`,
});
