# vue-template

Inspired by vue-enterprise-template
See the [vue-enterprise-template repo](https://github.com/chrisvfritz/vue-enterprise-boilerplate)

## Project setup

``` bash
# Setup alias
node _start.js

npm install
# OR
yarn
```

### Compiles and hot-reloads for development

``` bash
npm run dev
# OR
yarn dev
```

### Compiles and minifies for production

``` bash
npm run build
# OR
yarn build
```

### Lints and fixes files

``` bash
npm run lint
# OR
yarn lint
# lint and fix
yarn lint --fix
```

## Project structure

Project folders:
> These are the folders that you will frequently change while doing the project
- components
- locales
- pages
- router
- services
- store
- styles

Core folder:
> These are the common features, components, pages,... for the whole project
- api
- components
- constants
- layouts
- middleware
- mixins
- pages
- plugins
- styles
- utils

>Code will be put in the core folder if create a new feature, a new module doesn't make change to that code

## Contribute guides
### Commit

Format: `<emoji> <commit-message> <fileName (if possible)>`|`

See guide at: https://gitmoji.dev/

|   Commit type              | Emoji                                         |
|:---------------------------|:----------------------------------------------|
| Initial commit             | 🎉 `:tada:`                                  |
| Deploying stuff            | 🚀 `:rocket:`                                |
| New feature                | ✨ `:sparkles:`                              |
| Bugfix                     | 🐛 `:bug:`                                   |
| Refactor or modifying      | 🔨 `:hammer:`                                |
| Documentation, add README  | 📚 `:books:`                                 |
| Commenting stuff           | 📝 `:pencil:`                                |
| Styling                    | 🎨 `:art:`                                   |
| Hotfix                     | 🔥 `:fire:`                                   |

### Branch

- `master`
- `dev`
- `staging`
- `feature/*`
- `bugfix/*`
- `hotfix/*`

- Checkout `dev`, `prod` and  `feature/*` from master
- Checkout `hotfix` from `master` for production bug fixing
- Checkout `bugfix` from `feature/*` for feature bug fixing
### Pull request guide

- Merge `feature/*` into `dev` for development
- Merge `dev` into `staging` for demo and testing
- Merge `staging` into `master` for final production


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
