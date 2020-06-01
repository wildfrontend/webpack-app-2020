const path = require('path')
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
                test: /\.(scss|css|sass)$/i,
                use: ['css-loader', 'sass-loader', 'style-loader'],
            },
        ],
    },
    plugins: [],
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
    },
}
