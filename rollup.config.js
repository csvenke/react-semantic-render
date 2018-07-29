import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const externals = [
  ...(Object.keys(pkg.dependencies) || {}),
  ...(Object.keys(pkg.peerDependencies) || {}),
];

const createConfig = ({ output, plugins } = {}) => ({
  input: 'src/index.ts',
  output,
  external: externals,
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
    output: { file: 'lib/index.js', format: 'cjs' },
    plugins: [uglify()],
  }),
  createConfig({
    output: { file: 'lib/index.es.js', format: 'es' },
    plugins: [terser()],
  }),
];
