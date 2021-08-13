const express = require('express');
const router = express.Router();
const controller = require('../../controllers/auth')

router.post('/signIn', controller.signIn)
      .post('/signUp', controller.signUp)
      .get('/refresh-token', controller.refresh_token);
      
module.exports = router;