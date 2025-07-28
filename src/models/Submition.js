const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  fileUrl: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  grade: { type: Number, default: null },
}, { timestamps: true });

module.exports = mongoose.model("Submission", SubmissionSchema);
