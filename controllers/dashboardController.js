const Order = require("../models/DashboardModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};
//test a suppr
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

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password, pseudo } = req.body;
  try {
    const user = await User.signup(email, password, pseudo);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id is not valid" });
  }
  try {
    const userToDelete = await User.findOneAndDelete({ _id: id });

    if (!userToDelete) {
      return res.status(404).json({ error: "no user find with this id" });
    }

    res.status(200).json(userToDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUSer = async (req, res) => {
  //{} empty for .find to get all
  try {
    //.sort{{date -1}} from the newest orde to the oldest
    const allUsers = await User.find({});

    res.status(200).json(allUsers);
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
  loginUser,
  signupUser,
  deleteUser,
  getAllUSer,
};
