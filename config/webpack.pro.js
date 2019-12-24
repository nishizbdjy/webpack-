//生产环境

//引入合并模块
const merge = require('webpack-merge');
const base = require('./webpack.base')//公共部分
module.exports = merge(base,{
    mode: "production"//当前的环境(生产)
})