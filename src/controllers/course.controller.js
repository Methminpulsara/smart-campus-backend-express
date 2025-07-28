const courseService = require('../service/course.service')

exports.createCourse = async (req, res) => {
  const course = await courseService.createCourse(req.body);
  res.status(201).json(course);
};

exports.getAllCourses = async (req, res) => {
  const courses = await courseService.getAllCourses();
  res.status(200).json(courses);
};

exports.getCourseById = async (req, res) => {
  const course = await courseService.getCourseById(req.params.id);
  console.log(`this is your id ${req.params.id}` );
  
  res.status(200).json(course);
};

exports.updateCourse = async (req, res) => {
  const updated = await courseService.updateCourse(req.params.id, req.body);
  res.status(200).json(updated);
};

exports.deleteCourse = async (req, res) => {
  await courseService.deleteCourse(req.params.id);
  res.status(204).json({ message: "Course deleted" });
};
