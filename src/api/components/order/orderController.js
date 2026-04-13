const Order = require('../../../models/orderModel');
const calculateTotal = require('../../../utils/calculateTotal');

// CREATE
exports.createOrder = async (req, res) => {
  try {
    const { customerName, items } = req.body;

    const totalPrice = calculateTotal(items);

    const order = new Order({
      customerName,
      items,
      totalPrice,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET ALL
exports.getOrders = async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
