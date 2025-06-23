import { defineConfig, type UserConfig, type UserConfigFn } from 'tsdown';

const config: UserConfig | UserConfigFn = defineConfig({
  entry: ['components/**/index.ts', 'components/icon/iconRegistry.ts'],
  dts: true,
  platform: 'browser',
  unbundle: true,
});
export default config;
