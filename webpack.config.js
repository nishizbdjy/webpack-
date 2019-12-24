const path = require('path')//引入
//  导入提取样式的webpack插件 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//开始打包

module.exports = {//暴露
    entry: './src/index.js', //项目入口(绝对路径)
    output: {
        filename: './bundle.js',//默认打包后的文件名(默认就是这个)
        path: path.resolve(__dirname, 'dist')//打包后的文件目录(默认也是这个) 
    },
    // 模块加载器配置项
    module: {
        //     rules: [
        //         {
        //             test: /\.css$/,			// 匹配css扩展名文件
        //             use: [					// 配置loader加载器
        //                 'style-loader',		// 把css代码写入到网页中
        //                 'css-loader'		// 读取css的代码
        //             ]
        //         },
        //         {
        //             test : /.less$/,  //匹配less
        //             use : [
        //                 'style-loader',
        //                 'css-loader',
        //                 'less-loader'
        //             ]
        //         }
        //     ]
        // }
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
        new ExtractTextPlugin('style/style.css') // 提取到dist的style文件夹中
    ]
}