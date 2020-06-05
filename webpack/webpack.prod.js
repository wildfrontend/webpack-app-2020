const merge = require('webpack-merge')
const common = require('./webpack.common')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin({
                extractComments: true,
                parallel: true,
                terserOptions: {
                    extractComments: 'all',
                    compress: {
                        drop_console: true,
                    },
                },
                test: /\.js(\?.*)?$/i,
            }),
        ],
        splitChunks: {
            chunks: 'all',
            minChunks: Infinity,
        },
    },
    plugins: [new CleanWebpackPlugin()],
})
