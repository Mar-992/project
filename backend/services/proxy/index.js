const config = require('../../config/index');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express()

app.use('/api/v1/auth', proxy(
    `http://localhost:${config.get('ports').auth}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').auth}/api/v1/auth${req.url}`
        }
    }
));

app.use('/api/v1/recipes', proxy(
    `http://localhost:${config.get('ports').recipes}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').auth}/api/v1/recipes${req.url}`
        }
    }

));

app.use('/api/v1/users', proxy(
    `http://localhost:${config.get('ports').users}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').users}/api/v1/users${req.url}`
        }
    }
));