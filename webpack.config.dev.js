const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//生成脚本引入<script src="./dist/lib/index.js"></script>
module.exports = Object.assign({}, base, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
})