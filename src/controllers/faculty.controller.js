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

exports.createProfile = async (req,res)=>{
    
    const existing = await facultyService.getByID(req.user.id)
    if(existing){
        res.status(400).json({message:"User already exist"})
    }

    const {department,position} = req.body

    const faculty = await facultyService.createStudentProfile(
      req.user.id,
      department,
      position
    );

    if(!faculty){
        return res
            .status(500)
            .json({message:"Error creating user"})
    }
    res.status(201).json(faculty);
}
   