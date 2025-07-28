const Student = require('../models/Student')
const Faculty = require('../models/Faculty')
const Course = require('../models/Course')


exports.getStats = async ()=>{
    const totalStudent = await Student.countDocuments();
    const totalFaculty = await Faculty.countDocuments();
    const totalCourse = await Course.countDocuments();
    return {totalStudent, totalFaculty, totalCourse}
}

exports.getEnrollmentSummary = async() => {
    const courses = await Course.find()
    const students =  await Student.find();

    const result = courses.map(course =>{
        const count = students.filter(s=>{
            s.enrolledCourses.includes(course._id).length;
            return {course:count.name,enrolledCount:count};
        })
    })
    return result;
}

exports.getFacultyLoad = async ()=>{
    const faculty = await Faculty.find().populate('courses')
    return faculty.map(f=>({
        name : f._id,
        courseCount : f.course.length
    }))
}