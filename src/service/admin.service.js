const User = require('../models/User')

exports.getAllUsers = async()=>{
    return await User.find();
}

exports.deleteUser = async(id)=>{
    return await User.findByIdAndDelete(id);
}

exports.changeUserRole = async(id,role)=>{
    return await User.findByIdAndUpdate(id,{role},{new:true});
}
