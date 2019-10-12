const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify-es')
const json = require('rollup-plugin-json')

module.exports = async function build () {
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

  const inputOptions = {
    input: 'main.js',
    plugins: [
      resolve({ mainFields: ['main'], preferBuiltins: true, browser: true }),
      json(),
      commonjs(),
      babel(babelOptions),
      uglify()
    ]
  }

  const outputOptions = {
    name: 'waveorb',
    file: 'dist/bundle.js',
    format: 'iife'
  }

  const bundle = await rollup.rollup(inputOptions)
  bundle.write(outputOptions)
}

// List of options
// https://rollupjs.org/guide/en/#big-list-of-options

// const watchOptions = {
//   ...inputOptions,
//   output: [outputOptions],
//   watch: {
//     chokidar,
//     clearScreen,
//     exclude,
//     include
//   }
// }

// const watcher = rollup.watch(watchOptions)

// watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error
// })

// stop watching
// watcher.close()
