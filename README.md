# Mobile eShop

![e2e tests](https://github.com/LonelyPrincess/react-inditex-phone-app/actions/workflows/cypress.yml/badge.svg) [![Live demo](https://github.com/LonelyPrincess/react-inditex-phone-app/actions/workflows/deploy.yml/badge.svg)](https://lonelyprincess.github.io/react-inditex-phone-app)

This repository contains the source code for a simple application that aims to display information on different mobile phones, an application that has been developed with the [React](https://reactjs.org/) framework.

This application has been created in response to a code challenge proposed by [Inditex](http://www.inditex.es/) for a front-end position, and uses an [API deployed in Heroku](https://front-test-api.herokuapp.com/) and that they've provided for its usage on this exercise.

External libraries used during development include [Redux Toolkit](https://redux-toolkit.js.org/), [React Router](https://reactrouter.com/), [Formik](https://formik.org/), [Styled Components](https://styled-components.com/), [React Bootstrap](https://react-bootstrap.github.io/) and [FontAwesome](https://fontawesome.com/).

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

### Running the app in local browser

After you've started the development server, the web application will be available at the following address:

```
http://localhost:3000
```

You will be able to access it by entering that URL in any browser of your choice, such as [Google Chrome](https://www.google.com/chrome/).

### Running the tests

This project uses [Cypress](https://www.cypress.io/) for testing all of its features. Once the development server is running, you can run any of the following commands to run the tests:

- Open Cypress UI to run tests on a real browser:
```bash
$ npm run cypress:ui
```

- Run tests in headless mode directly in the CLI:
```bash
$ npm run cypress:cli
```

## Troubleshooting

### I cannot see any data when running the app on a browser

The API doesn't seem to be properly configured with the right response headers, which caused the following error to appear on the browser's console when running the application:

```
Access to fetch at 'xxxx' from origin 'xxxx'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is
present on the requested resource. If an opaque response serves your needs,
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

As a workaround, this project makes use of the proxy server [CORS anywhere](https://cors-anywhere.herokuapp.com/) to fix this CORS issue in requests to the API. However, as explained [here](https://github.com/Rob--W/cors-anywhere#demo-server), **the amount of requests allowed in this free demo server is limited**. Shall that limit be exceeded, you may get forbidden (403) errors as a response to any API request.

In order to solve that, you'll need to manually request access to the proxy server by clicking the "Request temporary access to the demo server" button in [this page](https://cors-anywhere.herokuapp.com/corsdemo), as described [here](https://github.com/Rob--W/cors-anywhere/issues/301#issuecomment-771210498).

This issue and its fix applies to both running the application locally or accessing the [version deployed in GitHub pages](https://lonelyprincess.github.io/react-inditex-phone-app).
