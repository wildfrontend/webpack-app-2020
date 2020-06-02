const merge = require('webpack-merge')
const common = require('./webpack.common')

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin()],
    },
    plugins: [new OptimizeCssAssetsWebpackPlugin()],
})
