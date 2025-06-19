const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('../../config/webpack.common');
const path = require('path');

module.exports = merge(common, {
    entry: './src/index.tsx', // App-specific entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js', // App-specific output file
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        port: '5000',
        static: {
            directory: path.join(__dirname, 'public')
        }
    },


});