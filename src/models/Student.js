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
attendance: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      presentDates: [Date],
    }
  ]
},
    {timeseries:true}
);

module.exports = mongose.model("Student", studetSchema);