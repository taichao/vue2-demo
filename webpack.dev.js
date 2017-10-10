const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        publicPath: '/app',
        proxy: { //代理服务器
            '/baidu': {
                target: 'http://www.baidu.com',
                changeOrigin: true
        }
    },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});