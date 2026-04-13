const Menu = require('../../../models/menuModel');

// CREATE
exports.createMenu = async (req, res) => {
  try {
    const menu = new Menu(req.body);
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET ALL
exports.getMenus = async (req, res) => {
  try {
    const data = await Menu.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
