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

// GET BY ID
exports.getOrderById = async (req, res) => {
  try {
    const data = await Order.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// DELETE
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// UPDATE
exports.updateOrder = async (req, res) => {
  try {
    const data = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// FILTER STATUS
exports.getByStatus = async (req, res) => {
  try {
    const data = await Order.find({
      status: req.params.status,
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
