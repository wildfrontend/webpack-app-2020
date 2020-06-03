# webpack.config

- [webpack.config](#webpackconfig)
  - [loader](#loader)
  - [devServer](#devserver)
  - [Issues](#issues)

## loader 

- babel-loader
- style-loader
- sass-loader
- css-loader
 - [file-loader](https://webpack.js.org/loaders/file-loader/)
## devServer
- [devServer](https://webpack.js.org/configuration/dev-server/)
- [babel-loader](https://babeljs.io/docs/en/babel-preset-react)
- [hot-reload](https://medium.com/frochu/react-%E6%95%B4%E5%90%88-hot-module-replacement-cc4721a432af)
  - [react-hot-loader](https://github.com/gaearon/react-hot-loader)



## Issues

1. `react-router-dom` refresh page not GET route

[solved](https://stackoverflow.com/questions/51566221/page-doesnt-load-on-refresh-react-router-dom) : 

webpack.config.js

````js
devServer:{
  ...
    historyApiFallback: {
    index: 'index.html' // assuming this is your entry point file that loads your bundle.
  }
}
````

2. file-loader splite font and file 
   > https://stackoverflow.com/questions/33058964/configure-webpack-to-output-images-fonts-in-a-separate-subfolders