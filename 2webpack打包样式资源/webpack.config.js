/*
    该配置文件需要放在src的同级目录下
    为webpack的配置文件 配置文件就是指示 webpack怎么做
    所有的构建工具都是基于node.js平台 而该平台默认 采用common.js语法（如下）
*/
//引入node.js方法 用来拼接绝对路径的方法
const { resolve } = require('path')

module.exports = {
    //webpack的配置
    //入口文件位置
    entry: './src/index.js',

    //出口文件配置
    output: {
        //出口文件名
        filename: 'built.js',
        // 出口文件的绝对路径 利用resolve来获取 同级目录下build文件夹的绝对路径
        // __dirname是node.js中的变量，代表当前文件所在目录的绝对路径 下面是拼接路径
        path: resolve(__dirname, 'build')
    },

    // loader的配置
    module: {
        
        rules: [
            // 详细的loader信息
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理 use是从下往上执行的
                use: [
                    // use执行顺序是 从下往上 从右向左
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成common.js模块加载js中，里面的内容是样式字符串
                    'css-loader'
                ]
            },
            // 详细的loader信息
            {
                // 匹配哪些文件
                test: /\.scss$/,
                // 使用哪些loader进行处理 use是从下往上执行的
                use: [
                    // use执行顺序是 从下往上 从右向左
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成common.js模块加载js中，里面的内容是样式字符串
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    // plugins的配置
    plugins: [
        // 详细plugins的配置
    ],

    // 模式
    mode: 'development',
    // mode: 'production'

}
