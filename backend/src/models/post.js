const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    size: Number,
    key: String,
    url: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", schema);
