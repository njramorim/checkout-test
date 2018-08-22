# checkout-test
POC of a checkout application

### Prerequisites

-node v8
-npm v5


### Installing

After clonning the repository, run `npm install`


## Development

```
npm run dev - start the front-end application at htpp://localhost:8080 and the server at http://localhost:3000
npm run dev-fe - start the front-end application at htpp://localhost:8080
npm run server - start the server at htpp://localhost:3000
npm run test - run the tests
```

## Deployment

The application can be deployed locally and accessed at http://localhost:3000 with `npm start`

```
npm start - build the assets for production and the start the server at htpp://localhost:3000
npm run build - build the assets for production (./dist)
npm run server - start the server at htpp://localhost:3000
```

## Built With

* [Express](https://github.com/expressjs/express)
* [Webpack](https://webpack.github.io/)
* [Babel](https://github.com/babel/babel)
* [React](https://github.com/facebook/react)
* [Axios](https://github.com/axios/axios)


##### (Would be nice) To do
- multiple routes
- error pages
- error states
- test / test configs
- apply stylelint
- redux
