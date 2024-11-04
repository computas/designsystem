import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'tsup';

const outDir = `../../../dist/${path.basename(process.cwd())}`;

await build({
  entry: ['index.ts'],
  sourcemap: true,
  dts: true,
  format: 'esm',
  outDir: outDir,
  clean: true,
  skipNodeModulesBundle: true,
});

await fs.copyFile('./react.ts', `${outDir}/react.ts`);
