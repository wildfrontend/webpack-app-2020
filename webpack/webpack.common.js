const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV_PROD = process.env.NODE_ENV === 'production'
const ENV_DEV = process.env.NODE_ENV === 'development'
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
        hmr: 'react-hot-loader/patch',
        vendor: ['react', 'react-router-dom', '@hot-loader/react-dom'],
        style: ['@emotion/styled', '@emotion/core'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: ENV_PROD
            ? 'js/[name].[chunkhash:8].js'
            : 'js/[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                loader: 'react-hot-loader/webpack',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './css',
                            esModule: true,
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(|svg|png|jpeg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(resourcePath, resourceQuery) {
                                // `resourcePath` - `/absolute/path/to/file.js`
                                // `resourceQuery` - `?foo=bar`
                                if (ENV_DEV) {
                                    return '[path][name].[ext]'
                                }
                                return '[contenthash:8].[ext]'
                            },
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(resourcePath, resourceQuery) {
                                // `resourcePath` - `/absolute/path/to/file.js`
                                // `resourceQuery` - `?foo=bar`
                                if (ENV_DEV) {
                                    return '[path][name].[ext]'
                                }
                                return '[contenthash:8].[ext]'
                            },
                            outputPath: 'fonts',
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            filename: './index.html',
        }),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.js', '.jsx'],
    },
}
