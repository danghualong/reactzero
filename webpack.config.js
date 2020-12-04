const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require("webpack");
const buildPath="dist";

module.exports={
    mode:"development",
    entry:path.resolve(__dirname,"src/index.jsx"),
    output:{
        path:path.resolve(__dirname,buildPath),
        filename:"[name].[hash].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|ts)x?$/,
                exclude:/(node_modules)/,
                use: {
                    loader:"babel-loader"
                }
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|svg|ttf)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // 热更新的模块对象
        new webpack.HotModuleReplacementPlugin(),
        // 在内存中生成页面的插件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            title: 'ts-react-starter',
            filename: 'index.html'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, buildPath),
        compress: true,
        port: 9000,
        hot: true,
        open: true,
    }

};