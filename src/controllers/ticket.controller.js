const ticketService = require('../service/ticket.service');

exports.create = async (req, res) => {
  const ticket = await ticketService.create(req.body, req.user.id);
  res.status(201).json(ticket);
};

exports.getAll = async (req, res) => {
  const tickets = await ticketService.getAll();
  res.status(200).json(tickets);
};

exports.update = async (req, res) => {
  const updated = await ticketService.update(req.params.id, req.body);
  res.status(200).json(updated);
};
