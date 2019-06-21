import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

const defaultConfig = Object.freeze({
  input: 'src/index.js',
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
})

const createConfig = mutator => {
  const config = { ...defaultConfig }
  return mutator(config)
}

export default [
  createConfig(config => {
    config.output = {
      file: 'dist/' + pkg.module,
      format: 'esm'
    }
    return config
  }),
  createConfig(config => {
    config.output = {
      file: 'dist/' + pkg.main,
      format: 'cjs'
    }
    return config
  }),
  createConfig(config => {
    config.experimentalCodeSplitting = true
    config.optimizeChunks = true
    config.input = [
      './src/List',
      './src/Show',
      './src/Switch'
    ]
    config.output = {
      dir: 'dist',
      format: 'cjs'
    }
    return config
  })
]
