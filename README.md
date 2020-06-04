# React Project Pattern <!-- omit in toc -->
- [Config Files](#config-files)
  - [.babelrc](#babelrc)
  - [.prettierrc](#prettierrc)
  - [.gitignore](#gitignore)
  - [jsconfig.json](#jsconfigjson)
  - [package.json](#packagejson)
- [React Pattern](#react-pattern)
- [Git Commit Pattern](#git-commit-pattern)
  - [Before Commit](#before-commit)
  - [Commit Formmat](#commit-formmat)
- [Format](#format)
  
## Config Files

### .babelrc

**Basic react env** :

| presets               | use |
| --------------------- | --- |
| "@babel/preset-env"   | env |
| "@babel/preset-react" | env |

**Relative path** :

```json
[
    "module-resolver",
    {
        "alias": {
            "assets": "./src/assets",
            "components": "./src/components",
            "pages": "./src/pages",
            "reducers": "./src/store/reducers",
            "routes": "./src/routes"
        },
        "root": ["."]
    }
]
```



### .prettierrc

Basic setting by [Prettier](https://prettier.io/docs/en/configuration.html#basic-configuration) 

### .gitignore

Basic setting by [create-react-app](https://github.com/facebook/create-react-app)

### jsconfig.json

More jsconfig tutorial refer [this](https://zhuanlan.zhihu.com/p/55644953)

| config          | use             |
| --------------- | --------------- |
| compilerOptions | reslove path    |
| exclude         | exclude folders |

**reslove path**：
````json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "assets/*": ["./src/assets/*"],
            "components/*": ["./src/components/*"],
            "pages/*": ["./src/pages/*"],
            "reducers/*": ["./src/store/reducers/*"],
            "routes/*": ["./src/routes/*"]
        }
    }
}
````
**exclude folders**：
````json
{
  "exclude": ["node_modules"]
}
````

### package.json

**script**
| command          | use                            |
| ---------------- | ------------------------------ |
| `yarn start`     | start dev server               |
| `yarn build`     | bundle static file             |
| `yarn prettier`  | format all js files in Project |
| `yarn storybook` | open storybook                 |

**dependency**

**main packages**：

| package               | use                        |
| --------------------- | -------------------------- |
| @emotion/styled       | css-in-js                  |
| @hot-loader/react-dom | react hmr relace react-dom |
| react                 | react core                 |
| react-hook-form       | form lib                   |
| react-hot-loader      | react hmr                  |
| react-router-dom      | router config              |
| redux                 | data flow                  |
| redux-react-hook      | redux hook middleware      |

````json
  "@emotion/styled": "^10.0.27",
  "@hot-loader/react-dom": "^16.13.0",
  "react": "^16.13.1",
  "react-hook-form": "^5.7.2",
  "react-hot-loader": "^4.12.21",
  "react-router-dom": "^5.2.0",
  "redux": "^4.0.5",
  "redux-react-hook": "^4.0.1"
````

**babel：**
````json
  // core
  "@babel/core": "^7.10.2",
  "@babel/preset-env": "^7.10.2",
  "@babel/preset-react": "^7.10.1",
   // relative path complier
  "babel-plugin-module-resolver": "^4.0.0",
````
**webpack：**
````json
  "babel-loader": "^8.1.0",
  "clean-webpack-plugin": "^3.0.0",
  "css-loader": "^3.5.3",
  "file-loader": "^6.0.0",
  "html-loader": "^1.1.0",
  "html-webpack-plugin": "^4.3.0",
  "mini-css-extract-plugin": "^0.9.0",
  "node-sass": "^4.14.1",
  "optimize-css-assets-webpack-plugin": "^5.0.3",
  "redux-devtools-extension": "^2.13.8",
  "sass-loader": "^8.0.2",
  "terser-webpack-plugin": "^3.0.3",
  "webpack": "^4.43.0",
  "webpack-cli": "^3.3.11",
  "webpack-dev-server": "^3.11.0",
  "webpack-merge": "^4.2.2"
````

**storybook:**
```json
  "@storybook/addon-actions": "^5.3.19",
  "@storybook/addon-console": "^1.2.1",
  "@storybook/addon-knobs": "^5.3.19",
  "@storybook/addon-notes": "^5.3.19",
  "@storybook/addon-viewport": "^5.3.19",
  "@storybook/addons": "^5.3.19",
  "@storybook/react": "^5.3.19",
```
## React Pattern
> refer : https://reactpatterns.com/

## Git Commit Pattern
> refer : https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.em2hiij8p46d

### Before Commit 

- #### Clean Test code
  - remove `console.log()`

### Commit Formmat

format : 

```sh
<type> (scope): title
- do something
- do another 
````

Allowed type : `* required`

| type     | comment                             |
| -------- | ----------------------------------- |
| feat     | feature                             |
| fix      | bug fix                             |
| docs     | document                            |
| style    | formatting, missing semi colons,... |
| refactor | refactor                            |
| test     | when adding missing tests           |
| chore    | maintain                            |



Allowed scope : `not requried`

```
Scope can be anything specifying place of the commit change. 
```

| scope | comment                            |
| ----- | ---------------------------------- |
| Home  | about Home router,pages,components |

Allowed title : `* required`

```md
This is a very short description of the change.
- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end
```
## Format
Sort `package.json` by key

```sh
npx sort-package-json
```

Other Json file

1. go to [JSON Sorter](https://r37r0m0d3l.github.io/json_sort/)
2. copy file and replace prettier file
  