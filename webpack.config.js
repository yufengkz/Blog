var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: './build'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: '/node_modules'
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(eot|svg|woff|woff2|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
}