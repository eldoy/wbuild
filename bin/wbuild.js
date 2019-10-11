#!/usr/bin/env node
const { execSync } = require('child_process')
function run () {
  require('../lib/builder.js')()
}
try {
  run()
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    console.log('Please wait, installing rollup...')
    execSync('npm i')
    run()
  }
}
