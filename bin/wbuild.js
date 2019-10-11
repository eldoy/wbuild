#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')
const fpath = path.resolve(path.join(__dirname, '..'))
console.log(fpath)
function run () {
  require(fpath + '/lib/builder.js')()
}
try {
  run()
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    process.chdir(fpath)
    console.log('Please wait, installing rollup...')

    execSync('npm i')
    console.log('Done. Run "wbuild" again to start building.')
  } else {
    throw e
  }
}
