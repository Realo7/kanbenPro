module.exports = {
  // 配置选项
  devServer: {
    proxy: {
      '/proxy': {
        target: 'https://oapi.dingtalk.com',
        secure: false,
        // 设置跨域
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '/',
        },
      },
    },
  },

};
