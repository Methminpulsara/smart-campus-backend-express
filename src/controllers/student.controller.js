const studentService = require('../service/student.service')

exports.getProfile = async (req, res) => {
  const student = await studentService.getStudentByUserId(req.user.id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
};

exports.updateProfile = async (req, res) => {
  const updated = await studentService.updateProfile(req.user.id, req.body);
  res.status(200).json(updated);
};

exports.enrollCourse = async (req, res) => {
  const result = await studentService.enrollInCourses(req.user.id, req.params.courseId);
  res.status(200).json(result);
};

exports.getAttendance = async (req, res) => {
  const data = await studentService.getAttendance(req.user.id, req.query.courseId);
  res.status(200).json(data);
};



exports.createProfile = async (req, res) => {
  
    const existing = await studentService.getStudentByUserId(req.user.id);
    if (existing) {
      return res.status(400).json({ message: "Student profile already exists" });
    }

    const { faculty, department } = req.body;

    const student = await studentService.createStudentProfile(req.user.id, faculty, department);
    if(!student){
    res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(201).json(student);
  
  
};
