import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';

const createConfig = ({ output, plugins } = {}) => ({
  input: 'src/index.ts',
  output,
  external: ['react', 'prop-types', 'tslib'],
  plugins: [
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.build.json',
      typescript: require('typescript'),
    }),
    ...plugins,
  ],
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
];
