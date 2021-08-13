const User = require("../models/user");

module.exports = {
  getUser: async (req, res) => {
    // assume try catch
    try {
      const user = await User.findById(req.params.id);
      res.status(200).send({
        error: false,
        message: `User with id #${req.params.id} fetched`,
        user
      });
    } catch (error) {
      // throw Error("something went wrong")
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      await User.updateOne({ id: req.params.id }, req.body)
    } catch (error) {
      // throw Error("something went wrong")
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await User.deleteOne({ id: req.params.id })
    } catch (error) {
      // throw Error("something went wrong")
    }
  },

  fetchAllUsers: async (req, res) => {
    // assume try catch
    const users = await User.find();
    res.status(200).send({
      error: false,
      message: "All users are fetched",
      users,
    });
  },
}