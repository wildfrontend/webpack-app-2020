# Webapck 


## Common Config

**Entry**
| entry  | class        |
| ------ | ------------ |
| app    | project      |
| hmr    | hmr          |
| vendor | core lib     |
| style  | css like lib |

```js
  entry: {
      app: path.resolve(__dirname, '../src/index.js'),
      hmr: 'react-hot-loader/patch',
      vendor: ['react', 'react-router-dom', '@hot-loader/react-dom'],
      style: ['@emotion/styled', '@emotion/core'],
  }
```
**Output**
All bundle files will ouput to `dist` folder.

**[output.publicPath](https://webpack.js.org/configuration/output/#outputpublicpath)** : 
if have <base> tag in html , it can remove

```js    
  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: ENV_PROD
          ? 'js/[name].[chunkhash:8].js'
          : 'js/[name].[hash:8].js',
  }
```
**Module**

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