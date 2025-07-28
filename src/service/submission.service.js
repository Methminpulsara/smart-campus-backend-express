const Submission = require('../models/Submition');

exports.submit = async (body, studentId) => {
  return await Submission.create({ ...body, student: studentId });
};

exports.getByAssignment = async (assignmentId) => {
  return await Submission.find({ assignment: assignmentId });
};
