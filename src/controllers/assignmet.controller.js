const assignmentService = require('../service/assignment.service');

exports.createAssignment = async (req, res) => {
  const data = await assignmentService.create(req.body, req.user.id);
  res.status(201).json(data);
};

exports.getAssignmentsByCourse = async (req, res) => {
  const data = await assignmentService.getByCourse(req.params.courseId);
  res.status(200).json(data);
};
