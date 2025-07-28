const Assignment = require('../models/Assignment');

exports.create = async (body, facultyId) => {
  return await Assignment.create({ ...body, uploadedBy: facultyId });
};

exports.getByCourse = async (courseId) => {
  return await Assignment.find({ course: courseId });
};
