const mongoose = require("mongoose");

const ConsumptionHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    package_name: {
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
  },
  {
    timestamps: true, // thời gian tạo và thời gian cập nhật
  }
);

module.exports = mongoose.model("ConsumptionHistory", ConsumptionHistory);
