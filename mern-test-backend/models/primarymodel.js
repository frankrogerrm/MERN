const mongoose = require("mongoose");

const primarySchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Primary = mongoose.model("Primary", primarySchema);
module.exports = Primary;
