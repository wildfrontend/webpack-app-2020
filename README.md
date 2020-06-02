# React Project Pattern

## Config Files

### .babelrc
- react env basic
  
```json
{
    "presets": [
      "@babel/preset-env", "@babel/preset-react"
    ]
}
```

### .prettierrc
> basic setting by [Prettier](https://prettier.io/docs/en/configuration.html#basic-configuration) 

### .gitignore
> basic seeting by [.gitignore Generator](https://marketplace.visualstudio.com/items?itemName=piotrpalarz.vscode-gitignore-generator)

### jsconfig.json
> more jsconfig tutorial refer [this](https://zhuanlan.zhihu.com/p/55644953)

- relative path 
````json
{
  "components": "./src/components/*", 
}
````

- exclude files

### package.json

- script 
  - `yarn prettier` : format all js files in Project
  - `yarn start` : start dev server
  - `yarn build` : bundle static file
#### dependency
##### main

````json
  "@hot-loader/react-dom": "^16.13.0", // indeed react-dom
  "react": "^16.13.1",
  "react-hot-loader": "^4.12.21"
````

##### babel
````json
  "@babel/core": "^7.10.2",
  "@babel/preset-env": "^7.10.2",
  "@babel/preset-react": "^7.10.1",
````
##### loader 
````json
  "babel-loader": "^8.1.0",
  "css-loader": "^3.5.3",
  "node-sass": "^4.14.1",
  "sass-loader": "^8.0.2",
````
##### devtool
````json
  "webpack": "^4.43.0",
  "webpack-cli": "^3.3.11",
  "webpack-dev-server": "^3.11.0"
````

### webpack.config
- loader 
  - babel-loader
  - style-loader
  - sass-loader
  - css-loader
  
- [devServer](https://webpack.js.org/configuration/dev-server/)
- [babel-loader](https://babeljs.io/docs/en/babel-preset-react)
- [hot-reload](https://medium.com/frochu/react-%E6%95%B4%E5%90%88-hot-module-replacement-cc4721a432af)
  - [react-hot-loader](https://github.com/gaearon/react-hot-loader)

## Reat Pattern
> refer : https://reactpatterns.com/

## Git Commit Format
> refer : https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.em2hiij8p46d

commit : 
format : 
```sh
<type> (scope): title
- do something
- do another 
````
Allowed type : * required

```md
This describes the kind of change that this commit is providing.

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```

Allowed scope : 

```
Scope can be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...
```

Allowed title : * required

```md
This is a very short description of the change.
- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end
```

### ISSUE

1. `react-router-dom` refresh page not GET route

[solved](https://stackoverflow.com/questions/51566221/page-doesnt-load-on-refresh-react-router-dom) : 

webpack.config.js

````
devServer:{
  ...
    historyApiFallback: {
    index: 'index.html' // assuming this is your entry point file that loads your bundle.
  }
}
````