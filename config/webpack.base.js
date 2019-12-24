///公共部分
const path = require('path')//引入
//  导入提取样式的webpack插件 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//引入自动生成html结构
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//开始打包
module.exports = {//暴露
    // 用对象的方式配置多个入口
    entry: {                //项目入口(绝对路径)
        index: "./src/index.js",
        about: "./src/about.js"
    },
    output: {
        // 修改输出路径和文件名，[name]是动态的，读取entry的属性
        filename: "[name].bundle.js",            //默认打包后的文件名(默认就是这个)
        path: path.resolve("./dist")      //打包后的文件目录(默认也是这个) 
    },

    // 模块加载器配置项
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({	// 提取css
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },

            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({	// 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            //图片
            {
                test: /\.(png|svg|jpg|gif)$/,// 匹配图片文件
                use: [
                    {
                        loader: "file-loader",              // 处理图片文件返回链接
                        options: {
                            publicPath: "./images/",   		//  引入图片时会在路径前面加上该选项
                            outputPath: "images"            //  输出到dist下的images目录
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style/style.css'), // 提取到dist的style文件夹中

        // + 新增配置
        new HtmlWebpackPlugin({                                 //配置自动添加结构
            template: "public/index.html"	// template指定默认html模板
        }),
        // 调用清除打包目录插件
        new CleanWebpackPlugin(),
    ],
}