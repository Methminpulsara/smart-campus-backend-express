const dashboardService = require('../service/dashboard.service')

exports.getStats = async(req,res)=>{
    const stats = await dashboardService.getStats();
    res.status(200).json(stats)
}

exports.getEnrollmentSummury = async(req,res)=>{
    const data = await dashboardService.getEnrollmentSummary();
    res.status(200).json(data)
}
exports.facultyLoad = async(req,res)=>{
    const data = await dashboardService.getFacultyLoad();
    res.status(200).json(data)
}