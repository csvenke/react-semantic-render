import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

const defaultConfig = {
  input: 'lib/index.js',
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: ['node_modules/**']
    }),
    terser()
  ]
}

const createConfig = (config) => ({
  ...defaultConfig,
  ...config
})

export default [
  createConfig({
    output: {
      file: 'dist/' + pkg.module,
      format: 'esm'
    }
  }),
  createConfig({
    output: {
      file: 'dist/' + pkg.main,
      format: 'cjs'
    }
  }),
  createConfig({
    input: [
      './lib/List',
      './lib/Show',
      './lib/Switch'
    ],
    output: {
      dir: 'dist',
      format: 'cjs'
    }
  })
]
