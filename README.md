# React Project Pattern
- [Config Files](#config-files)
- [React Pattern](#react-pattern)
- [Git Commit Format](#git-commit-format)
## Config Files

### .babelrc
basic react env 
  
```json
{
    "presets": [
      "@babel/preset-env", "@babel/preset-react"
    ]
}
```
relative path 
```json
{
  "plugins":
   [
      [
          "module-resolver",
          {
              "root": ["."],
              "alias": {
                  "routes": "./src/routes",
                  "pages": "./src/pages",
                  "components": "./src/components",
                  "assets":"./src/assets"
              }
          }
      ]
    ]
}
```
### .prettierrc
> basic setting by [Prettier](https://prettier.io/docs/en/configuration.html#basic-configuration) 

### .gitignore
> basic seeting by [.gitignore Generator](https://marketplace.visualstudio.com/items?itemName=piotrpalarz.vscode-gitignore-generator)

- remove ignore about Nuxt.js

### jsconfig.json
> more jsconfig tutorial refer [this](https://zhuanlan.zhihu.com/p/55644953)

- relative path 
````json
{
  "compilerOptions": {
      "baseUrl": ".",
      "paths": {
          "components/*": ["./src/components/*"],
          "routes/*": ["./src/routes/*"],
          "pages/*": ["./src/pages/*"],
          "assets/*": ["./src/assets"]
      }
  },
}
````

- exclude files
```json
{
  "exclude": ["node_modules"]
}
```
### package.json

#### script 
  - `yarn prettier` : format all js files in Project
  - `yarn start` : start dev server
  - `yarn build` : bundle static file
#### dependency
  
main packages：
````json
  // indeed react-dom
  "@hot-loader/react-dom": "^16.13.0", 
  "react": "^16.13.1",
  "react-hot-loader": "^4.12.21"
````

babel：
````json
  // core
  "@babel/core": "^7.10.2",
  "@babel/preset-env": "^7.10.2",
  "@babel/preset-react": "^7.10.1",
   // relative path complier
  "babel-plugin-module-resolver": "^4.0.0",
````
loader： 
````json
  "babel-loader": "^8.1.0",
  // replace style-loader
  "mini-css-extract-plugin": "^0.9.0",
  "css-loader": "^3.5.3",
  "node-sass": "^4.14.1",
  "sass-loader": "^8.0.2",
  // font / image
  "file-loader": "^6.0.0",
  // html
  "html-loader": "^1.1.0",
  // reac-hot-loader
  "react-hot-loader/webpack": "^4.12.21",
````
devtool：
````json
  "webpack": "^4.43.0",
  "webpack-cli": "^3.3.11",
  "webpack-dev-server": "^3.11.0",
  "webpack-merge": "^4.2.2"
````

## React Pattern
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
