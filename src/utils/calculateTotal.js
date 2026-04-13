module.exports = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);
