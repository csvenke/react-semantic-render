import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const createConfig = ({ output, plugins, ...restConfig } = {}) => ({
  input: 'src/index.ts',
  output,
  external: ['react', 'react-dom', 'prop-types', 'tslib'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      typescript: require('typescript'),
    }),
    commonjs(),
    resolve(),
    ...plugins,
  ],
  ...restConfig,
});

export default [
  createConfig({
    output: { file: `lib/${pkg.main}`, format: 'cjs' },
    plugins: [uglify(), filesize()],
  }),
  createConfig({
    output: { file: `lib/${pkg.module}`, format: 'esm' },
    plugins: [terser(), filesize()],
  }),
  createConfig({
    experimentalCodeSplitting: true,
    optimizeChunks: true,
    input: [
      'src/components/List/List.tsx',
      'src/components/Show/Show.tsx',
      'src/components/ShowAsync/ShowAsync.tsx',
      'src/components/Switch/Switch.tsx',
    ],
    output: {
      dir: 'lib',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [uglify()],
  }),
];
