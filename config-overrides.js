const { override, addLessLoader, fixBabelImports,addDecoratorsLegacy } = require('customize-cra')
module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  addDecoratorsLegacy(),
)