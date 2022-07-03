const mongoose = require("mongoose");

const ManagedHistory = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    updateType: {
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
    note: {
      type: String,
      required: false,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    managerUsername: {
      type: String,
      require: true
    }
  }
);

module.exports = mongoose.model("ManagedHistory", ManagedHistory);
