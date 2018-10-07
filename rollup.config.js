import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

const createConfig = ({ plugins, ...restConfig } = {}) => ({
  input: 'src/index.ts',
  external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      typescript: require('typescript'),
    }),
    ...plugins,
  ],
  ...restConfig,
});

export default [
  createConfig({
    output: { file: `lib/${pkg.main}`, format: 'cjs' },
    plugins: [sizeSnapshot(), terser()],
  }),
  createConfig({
    output: { file: `lib/${pkg.module}`, format: 'esm' },
    plugins: [sizeSnapshot(), terser()],
  }),
  createConfig({
    experimentalCodeSplitting: true,
    optimizeChunks: true,
    input: [
      './src/components/List/List.tsx',
      './src/components/Show/Show.tsx',
      './src/components/ShowIfElse/ShowIfElse.tsx',
      './src/components/Switch/Switch.tsx',
      './src/hocs/Hideable/Hideable.tsx',
    ],
    output: {
      dir: 'lib',
      format: 'cjs',
    },
    plugins: [terser()],
  }),
];
