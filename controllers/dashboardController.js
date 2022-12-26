const Order = require("../models/DashboardModel");
const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");

//get all orders
const getOrders = async (req, res) => {
  //{} empty for .find to get all
  try {
    //.sort{{date -1}} from the newest orde to the oldest
    const allOrders = await Order.find({}).sort({ date: -1 });

    res.status(200).json(allOrders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get one order
const getOneOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }
  try {
    const oneOrder = await Order.findById(id);

    if (!oneOrder) {
      //le return est pour éviter de continuer le code
      return res.status(404).json({ error: "no order find with this id" });
    }

    res.status(200).json(oneOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create new order
const createOrder = async (req, res) => {
  const { date, asset, direction, taille, risk, realise, profit, balance } =
    req.body;

  //add to db
  try {
    const order = await Order.create({
      date,
      asset,
      direction,
      taille,
      risk,
      realise,
      profit,
      balance,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete an order
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }
  try {
    const orderToDelete = await Order.findOneAndDelete({ _id: id });

    if (!orderToDelete) {
      //le return est pour éviter de continuer le code
      return res.status(404).json({ error: "no order find with this id" });
    }

    res.status(200).json(orderToDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update an order
const updateOrder = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }
  try {
    const orderToUpdate = await Order.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!orderToUpdate) {
      //le return est pour éviter de continuer le code
      return res.status(404).json({ error: "no order find with this id" });
    }

    res.status(200).json(orderToUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOneOrder,
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
};
