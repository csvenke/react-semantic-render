import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const getExternals = obj => [
  ...Object.keys(obj.peerDependencies),
  ...Object.keys(obj.dependencies),
];

const createConfig = ({ plugins, ...restConfig } = {}) => ({
  input: 'src/index.ts',
  external: getExternals(pkg),
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    typescript({
      tsconfig: './tsconfig.json',
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    ...plugins,
  ],
  ...restConfig,
});

const createOutput = ({ ...config }) => ({
  exports: 'named',
  sourcemap: true,
  ...config,
});

export default [
  createConfig({
    output: createOutput({
      file: `lib/${pkg.module}`,
      format: 'esm',
    }),
    plugins: [sizeSnapshot(), terser()],
  }),
  createConfig({
    experimentalCodeSplitting: true,
    optimizeChunks: true,
    input: [
      './src/index.ts',
      './src/components/List/List.tsx',
      './src/components/Show/Show.tsx',
      './src/components/ShowIfElse/ShowIfElse.tsx',
      './src/components/Switch/Switch.tsx',
      './src/hocs/Hideable/Hideable.tsx',
    ],
    output: createOutput({
      dir: 'lib',
      format: 'cjs',
    }),
    plugins: [terser()],
  }),
];
