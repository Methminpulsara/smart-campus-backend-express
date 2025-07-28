const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    department:String,
    position:String,
    course:[{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Course"
    }]

});

module.exports = mongoose.model("Faculty", FacultySchema);