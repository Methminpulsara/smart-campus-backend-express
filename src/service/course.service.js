const Course = require('../models/Course');

exports.createCourse = async (data) => {
  return await Course.create(data);
};

exports.getAllCourses = async () => {
  return await Course.find();
};


exports.getCourseById = async (id) => {
  return await Course.findById(id);
};

exports.updateCourse = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};
