const mongoose = require("mongoose");

const ConsumptionHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    consumption: [
      {
        packageName: {
          type: String,
          require: true,
        },
        price: {
          type: Number,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        dateTime: {
          type: Date,
          required: true
        }
      }
    ]
  }
);

module.exports = mongoose.model("ConsumptionHistory", ConsumptionHistory);
