const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require("webpack");
const buildPath="dist";

module.exports={
    mode:"development",
    entry:path.resolve(__dirname,"src/main.tsx"),
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
        // Generates an `index.html` file with the <script> injected
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            title: 'react from zero',
            filename: 'index.html'
        }),
    ],
    resolve:{
        extensions: ['.js', '.jsx','.tsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, buildPath),
        compress: true,
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true
    }

};