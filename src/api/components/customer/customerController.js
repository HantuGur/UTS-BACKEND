const Customer = require('../../../models/customerModel');

// CREATE
exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET ALL
exports.getCustomers = async (req, res) => {
  try {
    const data = await Customer.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
