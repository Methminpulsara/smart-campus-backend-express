const Faculty = require('../models/Faculty')
const Student = require('../models/Student')


exports.getByID = async(userId)=>{
    return await Faculty.findOne({user:userId}).populate('courses')
}

exports.updateProfile =async(userId,body)=>{
    return await Faculty.findByIdAndUpdate({ user: userId }, body,{new:true});
}

exports.assingCourse = async(facultyId,courseId)=>{
    const faculty = await Faculty.findById(facultyId);;
    if(!faculty.course.includes(courseId)){
        faculty.course.push(courseId);
        await faculty.save();
    }
    return faculty;
}

exports.markAttendance = async({studentId,courseId,data}) =>{
    const student = await Student.findById(studentId);
    const existing = student.attendance.find(a=> a.collection.toString()===courseId )

    if(existing){
        existing.records.push(data)   
    }else{
        student.attendance.push({
            courseId,records:[date]
        })
    }
    await student.save()
}

exports.createStudentProfile = async (userId,department,position) => {

  const faculty = new Faculty({
    user:userId,
    department:department,
    position:position
  });

  return await faculty.save()
}