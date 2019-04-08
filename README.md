# ⚡️ { Project name }

{ A brief description of your project... }

## 🛠 Installation

### 🔥 Setup Development

You should install Node.js recommended version (currently is 8.11.4)

#### NPM

```powershell
$ npm i
$ npm start
```

#### Yarn

```powershell
$ yarn
$ yarn start
```

If you don't want to development Frontend (maybe you're Backend developer), just run `npm build` or `yarn build`

HTML, CSS and JS code will be generated into `/dest` folder

### 🙏 EditorConfig

We need EditorConfig installed [in your editor/IDE](http://editorconfig.org/#download)

## ✍️ Styleguides

### Sass

We using [Stylelint](https://stylelint.io/) for avoid errors and enforce consistent conventions in your stylesheets.

To report your lint results:

```powershell
$ npm run css-lint
```

To auto fixing your errors:

```powershell
$ npm run css-lint-fix
```

About our rules config:

-   Extends config of [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss).
    
-   [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin for order related linting rules for stylelint.
    
-   And override some rules from our extends
    

### Javascript/jQuery

We using [ESLint](https://eslint.org/)
