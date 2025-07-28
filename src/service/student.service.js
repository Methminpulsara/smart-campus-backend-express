const Student = require("../models/Student");

exports.getStudentByUserId = async (userId) => {
  return await Student.findOne({ user: userId }).populate("enrolledCourses");
};

exports.updateProfile = async (userId, body) => {
  return await Student.findOneAndUpdate({ user: userId }, body, {
    new: true,
    runValidators: true,
  });
};

exports.enrollInCourses = async (userId, courseId) => {
  const student = await Student.findOne({ user: userId });
  if (!student.enrolledCourses.includes(courseId)) {
    student.enrolledCourses.push(courseId);
    await student.save();
  }
  return student;
};

exports.getAttendance = async (userId, courseId) => {
  const student = await Student.findOne({ user: userId });
  const attendance = student.attendance.find(
    (a) => a.course.toString() === courseId
  );
  return attendance || { message: "No attendance record found" };
};

const Student = require("../models/Student");

exports.getStudentByUserId = async (userId) => {
  return await Student.findOne({ user: userId });
};

exports.createStudentProfile = async (userId, faculty, department) => {
  const regNumber = "REG" + Date.now();

  const student = new Student({
    user: userId,
    regNumber,
    faculty,
    department,
  });

  return await student.save();
};
