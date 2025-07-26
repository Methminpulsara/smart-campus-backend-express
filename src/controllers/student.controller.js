const studentService = require("../service/student.service");

exports.getProfile = async(req,res)=>{
 const data = await studentService.getStudentByID(req.user.id);
 res.status(200).json(data);  
}

exports.updateProfile = async(req,res)=>{
    const updated = await studentService.updateProfile(res.user.id,req.body);
    res.status(200).json(updated);
}

exports.enrollCourse = async (req, res)=>{
    const result = await studentService.enrollInCources(req.user.id,req.params.courseId);
    res.status(200).json(result)
}

exports.getAttendance = async (req,res)=>{
    const data = await studentService.getAttendance(req.user.id,req.query.courseId);
    res.status(200).json(data)
}