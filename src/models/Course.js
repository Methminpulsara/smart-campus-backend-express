const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: { type: String },
  credit: { type: Number, default: 0 },
});

module.exports = mongoose.model("Course", CourseSchema);
