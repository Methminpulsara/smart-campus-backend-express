const facultyService = require('../service/faculty.service')


exports.getProfile = async(req,res)=>{
    const data = await facultyService.getByID(req.user.id);
    res.status(200).json(data);
}


exports.updateProfile = async(req,res)=>{
    const updated = await facultyService.updateProfile(req.user.id,req.body)
    res.status(200).json(updated);
}

exports.assingCourse = async(req,res)=>{
    const result = await facultyService.assingCourse(req.params.id,req.body.courseId)
    res.status(200).json(result);
}    

exports.markAtteAttendance = async(req,res)=>{
    const result = await facultyService.markAttendance(req.body);
    res.status(200).json(result);
}