const mongoose = require("mongoose");

const PaymentHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    payment: [
      {
        money: {
          type: Number,
          required: true,
        },
        dateTime: {
          type: Date,
          required: true,
        },
      },
    ],
  }
);

module.exports = mongoose.model("PaymentHistory", PaymentHistory);
