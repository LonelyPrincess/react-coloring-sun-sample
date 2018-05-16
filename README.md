# React: Coloring Sun Sample

[![Build Status](https://travis-ci.org/LonelyPrincess/react-coloring-sun-sample.svg?branch=master)](https://travis-ci.org/LonelyPrincess/react-coloring-sun-sample)
[![Inline docs](http://inch-ci.org/github/LonelyPrincess/react-coloring-sun-sample.svg?branch=master&style=shields)](http://inch-ci.org/github/LonelyPrincess/react-coloring-sun-sample)

## Project description

This is a really basic project to illustrate how React works. It includes an image of an adorable sun and a couple of buttons to switch its body color.

## Installation and deployment

### Pre-requisites

Before being able to run this application, you must have [Node Package Manager](https://nodejs.org/en/) or [Yarn](https://yarnpkg.com/) installed on your system.

### Get the application running

If you have all the required software installed, the first step to run this application is to install all of its dependencies and start the application's server.

To do so, you must open a console and, once located into the project's root directory, run the following commands:

```bash
# Install all project's dependencies
> npm install

# Run application's server
> npm start
```

These instructions assume that you've installed [Node Package Manager](https://nodejs.org/en/). If you are using [Yarn](https://yarnpkg.com/) instead, just replace `npm` with `yarn` in the commands listed above.

After running the `start` command, the console output should tell you at which URL is the application running.

```bash
The app is running at:

  # URL where the app is running
  http://localhost:3000/
```

Now you only have to enter that URL into your favourite browser, and that's it! You're all set!

## Project structure

The project folder structure is as follows:

```bash
├── public
└── src
    ├── main
    ├── res
        ├── data
        ├── images
        ├── styles
    ├── tests
```

Two folders can be found at the project's root path, being the `src` the most important one as it is the place where all of the application source code will live. The other one, `public`, will contain public resources that can be directly accessed via a direct request to the server, such as the application _favicon_ and the _index.html_ file.

The `src` directory is divided in three parts, each one with a different purpose:

- `main` - As the name implies, this folder contains the main code for the project, being it the wrapper for all the files where the app's functionality is implemented.

- `res` - Resources to be used by the application, including images, stylesheets or mock data files that can be used for testing purposes.

- `tests` - Code for unit testing is wrapped into this folder.

## Credits

Here you'll find a list of some of the resources used on this project, including links to useful documentation or tools involved in the development process.

### Image resources

* [Freepik](http://www.freepik.com)
* [Flaticon](https://www.flaticon.com/)

### Development tools

* [Jest](https://facebook.github.io/jest/)
* [React.js](https://facebook.github.io/react/)
* [Travis CI](https://travis-ci.org/)
* [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* [Node Package Manager](https://nodejs.org/en/)
* [React DevTools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Useful documentation

* [Use JSDoc](http://usejsdoc.org/)
* [Jest Docs](https://facebook.github.io/jest/docs/en/getting-started.html)
* [Enzyme Docs](http://airbnb.io/enzyme/index.html)
* [Testing React Apps](https://facebook.github.io/jest/docs/en/tutorial-react.html)
