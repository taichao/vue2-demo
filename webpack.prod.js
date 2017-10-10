const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

var plugins = []
plugins.push(new webpack.DefinePlugin({
    'process.env': { //设置成生产环境
        NODE_ENV: '"production"'
    }
}))
plugins.push(new webpack.optimize.UglifyJsPlugin({ //压缩代码
    compress: {
        warnings: false
    }
}))

module.exports = merge(common, {
    plugins
});