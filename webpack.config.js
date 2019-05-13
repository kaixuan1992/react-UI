const path = require('path')//引入node path模块
module.exports = {//node.js模块定义，导出一个对象
    entry: {//程序入口index 对应文件路径
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {//输出/引入path，处理不同操作系统 根目录问题 window \\dist mac linux /dist
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'RUI',
        libraryTarget: 'umd',//库的格式，告诉webpack需要把代码封装成什么样的模块定义 commonjs amd 兼容最强
    },
    module: {//如何解释tsx
        rules:[
            {
                test: /\.tsx?$/,//如何知道某个文件是tsx x可有可无以以此结尾
                loader: 'awesome-typescript-loader'//将typescript 解析成js
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
              },
              {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
              }
        ]
    }
 } 