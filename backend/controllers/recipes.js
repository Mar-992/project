const Recipe = require('../models/recipe')

module.exports = {
  createOne: async (req, res) => {
    try {
      if (req.files.image) {
        this.upload(req.files.document)
      }
      const recipe = await Recipe.create(req.body);
      res.status(201).send({
        error: false,
        message: `Recipe created in #${req.body.category} with id ${recipe._id}`,
        recipe
      })
    } catch (error) {
      res.status(500).send({
        error: true,
        message: error.message
      });
    }
  },
  getOne: async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.status(200).send({
        error: false,
        message: `Recipe with id #${req.params.id}`,
        recipe
      })
    } else {
      res.status(500).send({
        error: true,
        message: `Recipe with id ${req.params.id} not found`
      });
    }
  },
  getAll: async (req, res) => {
    let recipes = null;
    if (req.query.category) {
      recipes = await Recipe.find({ category: req.query.category });
    } else {
      recipes = await Recipe.find();
    }
    res.status(200).send({
      error: false,
      message: 'All recipes are shown',
      recipes
    })
  },
  delete: async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      await Recipe.deleteOne({ _id: req.params.id })
      res.status(200).send({
        error: false,
        message: `Recipe successfully delete`,
      })
    } else {
      res.status(500).send({
        error: true,
        message: `Recipe doesn't exists`,
      })
    }
  }
}