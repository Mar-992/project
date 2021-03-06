require('../../db');
const express = require('express');
const api = express();
const router = require('./router');
const config = require('../../config/index');
const jwt = require('express-jwt');

api.use(express.json());

api.use(jwt({
  secret: config.get('auth').jwt_key,
  algorithms: ['HS256']
}));

api.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({
      error: true,
      message: 'You need to log in in order to perform this action'
    });
  }
});

api.use('/api/v1/recipes', router);

api.listen(config.get('ports').recipes, err => {
  if (err) {
    return console.log('Error happened while starting the recipe service: ', err);
  }
  console.log('Recipe service successfully started on port', config.get('ports').recipes);
});