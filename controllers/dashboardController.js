const Order = require("../models/DashboardModel");
const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");

//get all orders
const getOrders = async (req, res) => {
  //{} empty for .find to get all
  try {
    const allOrders = await Order.find({}).sort({ createdAt: -1 });

    res.status(200).json(allOrders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get one order
const getOneOrder = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
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

//update an order

module.exports = {
  getOneOrder,
  getOrders,
  createOrder,
};
