

const adminService = require('../service/admin.service')

exports.getAllUsers = async (req, res) =>{
    const users = await adminService.getAllUsers()
    res.status(200).json(users)   
}

exports.deleteUser = async (req,res)=>{
    await adminService.deleteUser(req.params.id)
    res.status(204).json({ message: "User Deleted Successfully  " });
}

exports.changeRole = async(req,res)=>{
    const updated = await adminService.changeUserRole(req.params.id,req.body.role)
    res.status(200).json(updated);
}