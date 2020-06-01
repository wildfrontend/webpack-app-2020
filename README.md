# React Project Pattern

## Config Files

### .prettierrc
> basic setting by [Prettier](https://prettier.io/docs/en/configuration.html) 

### jsconfig.json
> more jsconfig tutorial refer [this](https://zhuanlan.zhihu.com/p/55644953)

- relative path
- exclude files


### package.json

- script 
  - `yarn prettier` : format all js files in Project
  - `yarn start` : start dev server
  - `yarn build` : bundle static file

### webpack.config

- [devServer](https://webpack.js.org/configuration/dev-server/)
- [babel-loader](https://babeljs.io/docs/en/babel-preset-react)
- [hot-reload](https://medium.com/frochu/react-%E6%95%B4%E5%90%88-hot-module-replacement-cc4721a432af)
  - [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### .gitignore
> basic seeting by [.gitignore Generator](https://marketplace.visualstudio.com/items?itemName=piotrpalarz.vscode-gitignore-generator)