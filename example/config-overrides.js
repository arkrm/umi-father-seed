const { override, addWebpackAlias, addBabelPlugin, addLessLoader  } = require('customize-cra');


module.exports = override(
  // /* 调试组件（生产模式）按需加载时配置 start */
  // addBabelPlugin([
  //   'import',
  //   {
  //     libraryName: '@arkrm/umi-father-seed',
  //     style: true,
  //     libraryDirectory: 'es', // 或 lib
  //   },
  //   '@arkrm/umi-father-seed',
  // ]),
  // addLessLoader({
  //    javascriptEnabled: true,
  //  }),
  //  /* 调试组件（生产模式）按需加载时配置 end */
  addWebpackAlias({
    'react': require.resolve('react'),
    'react-dom': require.resolve('react-dom')
  })
);