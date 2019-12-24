const path =require('path')//引入
//开始打包

module.exports = {//暴露
    entry: './src/index.js', //项目入口(绝对路径)
    output: {
        filename: './bundle.js',//默认打包后的文件名(默认就是这个)
        path: path.resolve(__dirname, 'dist')//打包后的文件目录(默认也是这个) 
    }


}