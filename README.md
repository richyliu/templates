# templates
Common templates

# Typescript React
Typescript React starter template comes with React, Typescript, Material UI, React Router, and the autobind decorator (to prevent reduant `this`)

## Direct copy
Copy the folder
```shell
cp -nr ./templates/typscript_react/ app/
cd app
npm i
```

## Create the app manually
This guide assumes installing to the `./app` directory. If this is not the case, change all `app` to the specified directory

First, install create-react-app
```shell
npm install -g create-react-app
```

Create the project. Make sure to change the `app` parameter to the name of your app
```shell
create-react-app app --scripts-version=react-scripts-ts
```

Install dependencies
```shell
cd ./app
npm i @material-ui/core @material-ui/icons typeface-roboto @types/react-router-dom autobind-decorator react-router-dom
```

Copy the configurations
```shell
cp ./templates/typescript_react/tslint.json ./app/
cp ./templates/typescript_react/tsconfig.json ./app/
cp ./templates/typescript_react/.editorconfig ./app/
```

Add the following lines to `./app/.gitignore`
```
.idea/
.vscode/
```

# Vue web app
This template comes with Vue, a lightweight MVC framework, Milligram for CSS, and Firebase

## Direct copy
Copy the folder
```shell
cp -nr ./templates/vue_simple/ app/
cd vue
npm i
```