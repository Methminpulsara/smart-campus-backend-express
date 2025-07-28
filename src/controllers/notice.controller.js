const noticeService = require('../service/notice.service');

exports.create = async (req, res) => {
  const data = await noticeService.create(req.body, req.user.id);
  res.status(201).json(data);
};

exports.getAll = async (req, res) => {
  const data = await noticeService.getAll();
  res.status(200).json(data);
};