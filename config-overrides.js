const { override, addLessLoader, fixBabelImports,addDecoratorsLegacy } = require('customize-cra')
const modifyVars = require('./theme')
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addDecoratorsLegacy(),
)