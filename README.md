# Mobile eShop

This repository contains the source code for a simple application that aims to display information on different mobile phones, an application that has been developed with the [React](https://reactjs.org/) framework.

This application has been created in response to a code challenge proposed by [Inditex](http://www.inditex.es/)for a front-end position, and uses an API deployed in [https://front-test-api.herokuapp.com/](Heroku) and that they've provided for its usage on this exercise.

## Features

The developed application includes the following features:

- Display list of available products.
- Include search box to filter products by name.
- Allow viewing detailed information on each product.
- Allow adding an item with specific settings (color and storage capacity can be chosen by the user) to the shopping cart.
- Include number of items added to the shopping cart at all times.

## Deployment

In order to run this application, the command below can be used to start the development server:

```bash
$ npm start
```

After you've done this, the web application will be available at the following address:

```
http://localhost:3000
```

This project also uses [Cypress](https://www.cypress.io/) for testing all of its features. Once the development server is running, you can run any of the following commands to run the tests:

- Open Cypress UI to run tests on a real browser:
```bash
$ npm run cypress:ui
```

- Run tests in headless mode directly in the CLI:
```bash
$ npm run cypress:cli
```
