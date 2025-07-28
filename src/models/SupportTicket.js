const mongoose = require("mongoose");

const SupportTicketSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ["open", "in_progress", "resolved"],
    default: "open",
  },
  response: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("SupportTicket", SupportTicketSchema);
