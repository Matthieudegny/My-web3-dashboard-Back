const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dashboardSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    asset: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    taille: {
      type: Number,
      required: true,
    },
    risk: {
      type: Number,
      required: true,
    },
    realise: {
      type: Number,
      required: true,
    },
    profit: {
      type: Number,
      required: true,
    },
  },
  //add the info about the date creation
  { timestamps: true }
);

module.exports = mongoose.model("Order", dashboardSchema);
