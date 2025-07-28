const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Assignment", AssignmentSchema);
