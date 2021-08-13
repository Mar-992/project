const express = require('express');
const router = express.Router();
const controller = require('../../controllers/users');

router.get('/:id', controller.getUser)
      .post('/:id', controller.updateUser)
      .delete('/:id', controller.deleteUser)
      .get("/", controller.fetchAllUsers)

module.exports = router;