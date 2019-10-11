import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify-es'

const defaultOptions = {
  name: 'waveorb'
}

const babelOptions = {
  babelrc: false,
  runtimeHelpers: true,
  exclude: 'node_modules/**',
  presets: [
    [
      '@babel/env', {
        modules: false,
        targets: '> 0.25%, not dead'
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    ...defaultOptions
  },
  plugins: [
    resolve({ mainFields: ['main'], preferBuiltins: true, browser: true }),
    commonjs(),
    babel(babelOptions),
    uglify()
  ]
}

// [
//   "@babel/env",
//   {
//     "modules": false,
//     "useBuiltIns": "usage",
//     "corejs": 3,
//     "targets": "ie 11"
//   }
// ]

// resolve({ mainFields: ['jsnext'], preferBuiltins: true, browser: true }),
// export default [
//   {
//     input: 'src/modules/brage.js',
//     output: Object.assign({
//       file: 'dist/brage.es.js',
//       format: 'es'
//     }, defaultOptions),
//     plugins: [
//       babel(babelOptions)
//     ]
//   },

//   {
//     input: 'src/modules/brage.js',
//     output: Object.assign({
//       file: 'dist/brage.js',
//       format: 'umd'
//     }, defaultOptions),
//     plugins: [
//       babel(babelOptions)
//     ]
//   }
// ]

// https://rollupjs.org/guide/en/
// https://github.com/rollup/rollup-plugin-node-resolve
// https://github.com/mecurc/181-rollup-issue
// https://github.com/axios/axios/issues/1259
// https://github.com/webpack/webpack/issues/4674
// https://github.com/rollup/rollup-plugin-babel/issues/312
// https://github.com/htho/mweRollupBabelAsyncAwait
// https://github.com/rollup/rollup-plugin-babel#configuring-babel
// https://github.com/rollup/rollup-plugin-babel/issues/209
// https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
