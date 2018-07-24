import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.ts',
  output: {
    file: 'lib/index.min.js',
    format: 'cjs'
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.build.json',
      typescript: require('typescript')
    }),
    uglify()
  ],
  external: ['react', 'react-dom', 'prop-types'],
};
