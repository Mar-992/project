require('../../db');
const express = require('express');
const api = express();
const router = require('./router');
const jwt = require('express-jwt');
const config = require('../../config/index')

api.use(express.json());

api.use(jwt({
    secret: config.get('auth').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v1/auth/signIn',
        '/api/v1/auth/signUp'
    ]
}));

api.use((err, req, res, next) => {
    if (err.name === 'UnathorizedError') {
        res.status(401).send({
            error: true,
            message: 'You need to log in'
        });
    }
});

api.use('/api/v1/auth', router);


api.listen(config.get('ports').auth, err => {
    if (err) {
        return console.log('Error happended while starting auth service: ', err);
    }
    console.log('Auth service successfully start on port', config.get('ports').auth);
});