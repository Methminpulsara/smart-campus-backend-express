const eventService = require('../service/event.service');

exports.create = async (req, res) => {
  const event = await eventService.create(req.body, req.user.id);
  res.status(201).json(event);
};

exports.getAll = async (req, res) => {
  const data = await eventService.getAll();
  res.status(200).json(data);
};