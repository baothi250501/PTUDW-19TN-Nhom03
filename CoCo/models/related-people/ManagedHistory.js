const mongoose = require("mongoose");

const ManagedHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    managements: [
      {
        update_type: {
          type: Number,
          required: true,
        },
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
  }
);

module.exports = mongoose.model("ManagedHistory", ManagedHistory);
