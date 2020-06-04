const merge = require('webpack-merge')
const common = require('./webpack.common')

const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin({
                extractComments: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
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
    plugins: [new CleanWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()],
})
