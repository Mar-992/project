const express = require('express');
const router = express.Router();
const controller = require('../../controllers/storage');

router.get('/:folder/:filename', controller.fetch)
      .post('/', controller.upload)
      .delete('/:folder/:filename', controller.delete);

module.exports = router;