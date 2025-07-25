const mongose = require('mongoose');

const studetSchema = new mongose.Schema({
  user: {
    type: mongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  regNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  enrollerdCourses: [
    {
      type: mongose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  attendance:[{
    type:mongose.STATES.Types.ObjectId,
    ref:"Course",
    presntDates:[Date]
  }]
},
    {timeseries:true}
);

module.exports = mongose.model("Student", studetSchema);