import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const externals = [
  ...(Object.keys(pkg.dependencies) || {}),
  ...(Object.keys(pkg.peerDependencies) || {}),
];

const createConfig = ({ output } = {}) => ({
  input: 'src/index.ts',
  output,
  external: externals,
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.build.json',
      typescript: require('typescript'),
    }),
    uglify(),
  ],
});

export default [
  createConfig({
    output: {
      file: 'lib/index.min.js',
      format: 'cjs',
      exports: 'named',
    },
  }),
];
