const express = require('express');
const router = express.Router();
const controller = require('../../controllers/recipes')

router.get('/', controller.getAll)
      .get('/:id', controller.getOne)
      .post('/', controller.createOne)
      .delete('/:id', controller.delete)
      
module.exports = router;