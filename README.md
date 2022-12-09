# 透過Ｗ ebpack5.0 打包 React Project

## Step by step

- Basic scaffolding: create project folder and serve plain HTML
- Add Webpack and bundle a simple JS file
- Add Babel for ES6 support
- Add React

### Create project folder and serve plain HTML

```mkdir react-webpack
cd react-webpack
npm init -y
```

```
mkdir public
touch public/index.html
```

先試跑一下

```
npx serve public
```

### Adding Webpack

```
npm install webpack webpack-cli --save-dev
```

create a simple JavaScript file

```
mkdir src
touch src/index.js
```

creating a webpack.config.js file in the root of the project:

```
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
};
```

in package.json, add a new "build" script:

```
"scripts": {
    "build": "webpack"
},
```

try it

```
npm run build
```

move the static assets

```
npm install html-webpack-plugin --save-dev
```

And update the webpack.config.file:

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
```

try it again

```
npm run build
npx serve build
```

Adding Webpack dev server

```
npm install --save-dev webpack-dev-server
```

configure it in the Webpack config

```
{
  // ...,
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  }
}
```

add npm run start in package.json

```
{
  // ...,
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack serve --mode development"
  }
}
```

### Adding Babel

npm install

```
npm i @babel/core @babel/preset-env babel-loader --save-dev
```

update the Webpack config

```
{
 // ...,
 module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js"],
  }
}
```

create the Babel config file .babelrc

```
// .babelrc

{
  "presets": [
    "@babel/preset-env"
  ]
}
```

### Add React

```
npm i react react-dom --save
npm i @babel/preset-react --save-dev
```

update the .babelrc file to also apply the preset-react

```
// .babelrc

{
    "presets": [
      "@babel/preset-env",
      ["@babel/preset-react", {
      "runtime": "automatic"
    }]
    ]
}
```

update the Webpack config to pass jsx files

```
// webpack.config.js

{
  // ...,
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,         // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],    // <-- added `.jsx` here
  },
}
```

## Reference

### webpack

https://jsramblings.com/creating-a-react-app-with-webpack/
https://webpack.js.org/guides/getting-started/#basic-setup

### babel

https://ithelp.ithome.com.tw/articles/10240250
