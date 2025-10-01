const mongoose = require("mongoose");

const stretchSchema = new mongoose.Schema({
  name: String,
  description: String,
  difficulty: String,
  duration: Number,
  muscleGroups: [String],
  tags: [String],
  imageUrls: [String],
  videoUrls: [String],
});

module.exports = mongoose.model("Stretch", stretchSchema, "StretchesV2");
