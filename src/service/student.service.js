const Student = require('../models/Student')

exports.getStudentByID = async (id)=>{
    return await Student.find(id).populate('enrolledCourses')   
};

exports.updateProfile =async(id,body)=>{
    return await Student.findByIdAndUpdate(id,body,{new:true, runValidators:true}, );
}

exports.enrollInCources =async(studentID,courseId)=>{
    const student = await Student.findById(studentID);
    if(!student.enrollerdCourses.some(cid => cid.toString()===courseId)){
        student.enrollerdCourses.push(courseId);
        await student.save();
    }
    return student;
}

exports.getAttendance = async (studentId, courseId) => {
  const student = await Student.findById(studentId);
  const attendance = student.attendance.find(a => a.courseId.toString() === courseId);
  return attendance || { message: "No attendance record found" };
};
