const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['react-hot-loader/patch', './src/index.js'],
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js',
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        hot: true,
        port: 3000,
        historyApiFallback: {
            index: 'index.html',
        },
    },
}
