const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.NODE_ENV

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
        hmr: 'react-hot-loader/patch',
        vendor: ['react', 'react-router-dom', '@hot-loader/react-dom'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename:
            ENV === 'production'
                ? 'js/[name].[chunkhash].js'
                : 'js/[name].[hash].js',
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
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
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
