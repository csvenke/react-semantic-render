import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const createConfig = ({ output, plugins } = {}) => ({
  input: 'src/index.ts',
  output,
  external: ['react', 'prop-types'],
  plugins: [
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
    plugins: [uglify()],
  }),
  createConfig({
    output: { file: `lib/${pkg.module}`, format: 'esm' },
    plugins: [terser()],
  }),
];
