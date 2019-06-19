# Not another TODO APP

## Introduction

Hi! there, so I started this project with the intention to practice and stablish some best practices of development, reactJs, redux and reducers, tests, folder structure, naming, linting, configurations, and more.
I was thinking in which type of app should I create to apply those practices, after an hour I just said wait!, let's do it in the most common starter app! a ToDo App, 🤔 ok ?!?!. Then I realized that everyone has a ToDo App with the same styles or layout, so I said no! let's do something different but simple and there you have "Not Another ToDo App". Hope you enjoy it!.

## App Link

You can see in action [here](https://luiggi370z.github.io/react-todo/).

## Stack

- ReactJS + hooks
- Redux + Reselect
- CSS Modules / Sass
- Date-fns
- Enzyme/Jest
- ESlint + Husky

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Deployment

### `npm run build` fails to minify

## Tests

### Notes

- I used `check-prop-types` for propTypes tests.
- Customize `jsconfig` to run correctly Jest from VS Code plugin.
- Customize `jsconfig` to use src as root folder for imports.
- Customize eslint rule to specify special files to ignore imports from dev dependencies rule.
- More details about best practices could be found in my repo `react-starter-kit`.
