//开发环境

//引入合并模块
const merge = require('webpack-merge');
const base = require('./webpack.base')//公共部分
module.exports = merge(base,{  //暴露
    mode: "development",//当前的环境(开发)
    devtool: "source-map", // + 生成映射源代码文件
    // + 开发服务配置
    devServer: {
        port: 5050 // 默认端口是8080
    },
})
