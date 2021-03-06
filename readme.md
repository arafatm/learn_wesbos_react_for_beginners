# West Bos: React for Beginners

## Introduction, Tooling and Editor Setup

Install node.js to run required tooling

[Chrome React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

Using VStudio for editor

Copied https://github.com/wesbos/React-For-Beginners-Starter-Files into `/React-For-Beginners
- `/stepped-solutions` follow the videos by chapter

Look at `package.json`
- `react-scripts` builds the project; Avoid to set up your own webpack
- `autoprefixer-stylus` and `stylus` for styling
- `firebase` to connect to DB
- `prop-types` to define what data to expect
- `re-base` to connect to firebase and sync changes
- `react` and `react-dom` are core react pacakges
- `react-router-dom` to watch for changes
- `react-transition-group` for animations

`scripts` section for commands that can be run
- `start` to run babel and webpack

[:ship: 48195c5](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/48195c5) 
`$ npm install`

In case of any install errors

```bash
rm -rf node_modules 
rm -rf package-lock.json

npm i
```

`npm start` to start up the application

[:ship: 5b1b631](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/5b1b631)
test hot reload with an `alert`

## Thinking and Understanding React Components

Everything in React is a **component**
- a reusable of your website

Use **React Dev Tools** to see the components defined

## Creating our First Components

If you View Source you can find the `alert(hey)` code if you in `bundle.js`

Add our new component to `src/index.js`
- `import React from 'react'` note the capitalization rules
- classes should start with Capital
- class should `extend React.Component`
- method `render` is main

Looking at `public/index.html` note the `<div id="main">`
- this is where the app is mounted

To mount our react app we `import { render } from 'react-dom'`
- then we `render( <somecode>, <mountpoint>)`

[:ship: 29240dd](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/29240dd)
Our first React Component

[:ship: 5e47786](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/5e47786)
render the StorePicker

[:ship: a2d3b8b](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/a2d3b8b)
move StorePicker into its own components file. 
- **Note** the import and export statements

## Writing HTML with JSX

JSX allows mixing JS with HTML

[:ship: c98f432](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/c98f432)
Example of using `React.CreateElement` (without JSX)

JSX Gotchas:
- Can't use `class`. Must use `className`
- [:ship: d88d0ba](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/d88d0ba) Example of incorrectly returning multiple lines in JSX
- [:ship: 3175851](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/3175851) Use `return ( ../.. )` to return multiple lines
- [:ship: 26ddb98](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/26ddb98) Can only return a single element in JSX
- [:ship: cbba2e5](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/cbba2e5) However you can use `<React.Fragment>` to return sibling elements
- [:ship: 1b2667e](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/1b2667e) comments in JSX are weird. Have to put them in `{ ... }`

[:ship: 2b7c441](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/2b7c441)
A working StorePicker component

## Loading CSS into our React Application

[:ship: 0c6a63e](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/0c6a63e)
`import "path/styles.css"` in `index.js`

## Creating our application layout with components

:caution: In your editor, install **prettier** code formatter

[:ship: c79bf73](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/c79bf73)
New App component - :caution: dont forget to `export default App` - :caution: dont forget to `import App`

[:ship: b68cac9](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/b68cac9)
Initial Header component

[:ship: 5d0b542](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/5d0b542)
Style it some eg with Anchor image in the header

[:ship: 58af0a3](https://github.com/arafatm/learn_wesbos_react_for_beginners/commit/58af0a3)
placeholders for inventory and order

xxx
## Passing Dynamic data with props
## Stateless Functional Components
## Routing with React Router
## Helper and Utility Functions
## Events, Refs and this Binding
## Handling Events
## Understanding State
## Loading data into state onClick
## Displaying State with JSX
## Updating our Order State
## Displaying Order State with JSX
## Persisting our State with Firebase
## Persisting Order State with localstorage
## Bi-directional Data Flow and Live State Editing
## Removing Items from State
## Animating React Components
## Component Validation with PropTypes
## Authentication
## Building React for Production
## Deploying to Now
## Deploying to Netlify
## Deploying to an Apache Server
## Ejecting from create-react-app
