const SupportTicket = require('../models/SupportTicket');

exports.create = async (body, studentId) => {
  return await SupportTicket.create({ ...body, student: studentId });
};

exports.getAll = async () => await SupportTicket.find();

exports.update = async (id, data) => {
  return await SupportTicket.findByIdAndUpdate(id, data, { new: true });
};