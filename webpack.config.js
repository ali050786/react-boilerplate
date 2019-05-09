const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: Path.join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }, 
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}