const submissionService = require('../service/submission.service');

exports.submit = async (req, res) => {
  const data = await submissionService.submit(req.body, req.user.id);
  res.status(201).json(data);
};

exports.getByAssignment = async (req, res) => {
  const data = await submissionService.getByAssignment(req.params.id);
  res.status(200).json(data);
};