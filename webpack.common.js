const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

var plugins = []
plugins.push(
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        filename: './index.html', //生成的html存放路径，相对于 path
        template: './src/template/index.html', //html模板路径
    })
)

module.exports = {
    entry: ['./src/main.js'], //编译入口文件
    output: {
        publicPath: '/app',
        path: path.resolve(__dirname + '/dist'), //编译到app目录
        filename: '[name].js?[hash]' //编译后的文件名
    },
    module: {
        rules: [
            {
                test: /\.css/,
                exclude: /^node_modules$/,
                use: [
                    'style-loader','css-loader','autoprefixer-loader'
                ]
            },
            {
                test: /\.vue$/,
                use : ['vue-loader']
            },
            {
                test: /\.js(x)*$/,
                exclude: /^node_modules$/,
                use: ['babel-loader']
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                use: ['style-loader','css-loader','autoprefixer-loader','less-loader']
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                use: ['file-loader']
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                use: ['file-loader']
            }
        ]
    },
    plugins,
    resolve: {
        extensions: ['.js', '.vue', '.jsx'], //后缀名自动补全
        alias: {
            vue: 'vue/dist/vue.js', //webpack打包时，需要设置别名
            store: path.resolve('src/store/'), //常用工具方法
        }
    }
}
