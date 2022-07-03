const mongoose = require("mongoose");

const ManagedHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    update_type: {
      type: Number,
      required: true,
    },
    managements: [
      {
        infectionStatus: {
          type: String,
          required: true,
        },
        place: {
          type: String,
          required: true,
        },
        dateTime: {
          type: Date,
          required: true,
        }
      },
    ],
  },
  {
    timestamps: true, // thời gian tạo và thời gian cập nhật
  }
);

module.exports = mongoose.model("ManagedHistory", ManagedHistory);
