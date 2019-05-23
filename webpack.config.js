const path = require('path'); // node内置的模块，用以配置路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html文件的插件


module.exports = {
    entry: './src/js/entry.js', // 入口文件的配置
    output: { // 出口/输出的配置
        filename: 'bundle.js', // 输出的文件名
        // publicPath: 'js/', //设置为index.html提供资源服务的时候带有强制性。
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    devServer: {
        // contentBase: 'dist/' // webpack-dev-server 默认服务于根路径下的index.html
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}