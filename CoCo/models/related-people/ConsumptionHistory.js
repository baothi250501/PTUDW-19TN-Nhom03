const mongoose = require("mongoose");

const ConsumptionHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    consumption: [
      {
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
        dateTime: {
          type: Date,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true, // thời gian tạo và thời gian cập nhật
  }
);

module.exports = mongoose.model("ConsumptionHistory", ConsumptionHistory);
