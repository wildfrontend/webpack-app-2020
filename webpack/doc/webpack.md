# Webapck  <!-- omit in toc -->
webpack developement and production config, and any about webpack issues

- [Common Config](#common-config)
  - [Entry](#entry)
  - [Output](#output)
  - [Module](#module)
- [Development Config](#development-config)
- [Production Config](#production-config)
- [Issues](#issues)
  
## Common Config 

### Entry
| entry point | class     |
| ----------- | --------- |
| app         | project   |
| hmr         | hmr       |
| vendor      | core lib  |
| style       | style lib |

```js
entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    hmr: 'react-hot-loader/patch',
    vendor: ['react', 'react-router-dom', '@hot-loader/react-dom'],
    style: ['@emotion/styled'],
}
```
### Output

All bundle files would be output to `dist` folder.

**[publicPath](https://webpack.js.org/configuration/output/#outputpublicpath)** : 

if have <base> tag in html , it can be removed

**filename** : 
> [reffer](https://ithelp.ithome.com.tw/articles/10200454)

- `chunkhash:8` : in `production` mode, webpack does not need to update bundle file, so can be use `chunkhash` to cache for browser
- `hash` : in `developmant` mode , avoid `hmr` reload error, output filname need to change to `hash`
  
```js    
  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: ENV_PROD
          ? 'js/[name].[chunkhash:8].js'
          : 'js/[name].[hash:8].js',
  }
```
### Module

**loader**

| loader                                                | use                     |
| ----------------------------------------------------- | ----------------------- |
| react-hot-loader/webpack                              | hmr                     |
| babel-loader                                          | bundle js               |
| css-loader , sass-loader, MiniCssExtractPlugin.loader | bundle css              |
| file-loader                                           | output iamges and fonts |
| html-loader                                           | build spa index.html    |

**plugins**

| plugin               | use              |
| -------------------- | ---------------- |
| MiniCssExtractPlugin | hash css file    |
| HtmlWebpackPlugin    | setting spa html |

**[reslove](https://webpack.docschina.org/configuration/resolve/)**

replace `react-dom` to `@hot-loader/react-dom`

```js
resolve: {
    alias: {
        'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx'],
},
```


## Development Config

**devtool**
> https://webpack.docschina.org/configuration/devtool/

**devServer**
- contentBase : folder of devServer root path
- hot : hot reload
- historyApiFallback : setting about spa router , [relation issue](https://stackoverflow.com/questions/51566221/page-doesnt-load-on-refresh-react-router-dom)

```js
devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
},
```

## Production Config

**plugins**

| Plugin                         | use                   |
| ------------------------------ | --------------------- |
| CleanWebpackPlugin             | clear old dist folder |
| OptimizeCssAssetsWebpackPlugin | minify                |
| TerserPlugin                   | minify Js             |

[TerserPlugn](https://webpack.docschina.org/plugins/terser-webpack-plugin/):


```js

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

```
## Issues

- [Should I use sourcemap in production](https://css-tricks.com/should-i-use-source-maps-in-production/) 
- [How to output images/fonts in a separate subfolders](https://stackoverflow.com/questions/33058964/configure-webpack-to-output-images-fonts-in-a-separate-subfolders)  
- [Page doesn't load on refresh - react-router-dom](https://stackoverflow.com/questions/51566221/page-doesnt-load-on-refresh-react-router-dom)