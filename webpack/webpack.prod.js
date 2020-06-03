const merge = require('webpack-merge')
const common = require('./webpack.common')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin(), new UglifyJsPlugin()],
        splitChunks: {
            chunks: 'all',
            minChunks: Infinity,
        },
    },
    plugins: [new CleanWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()],
})
