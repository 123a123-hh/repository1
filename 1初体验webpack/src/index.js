/* 
    webpack 的入口文件 index.js

    1.运行指令
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
        webpack会以 ./src/index.js为入口文件 打包后输出到 ./build/built.js 环境为开发环境
    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
        webpack会以 ./src/index.js为入口文件 打包后输出到 ./build/built.js 环境为生产环境
*/

import data from './data.json'
console.log(data)

function add(a, b) {
    return a + b;
}

console.log(add(1, 2))