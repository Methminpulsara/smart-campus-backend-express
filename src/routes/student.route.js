const express = require('express')
const router = express.Router();
const studentController = require('../controllers/student.controller');
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const asyncHandler = require('../util/asyncHandler')




router.get('/profile',protect,asyncHandler(studentController.getProfile))
router.put('/update',protect,asyncHandler(studentController.updateProfile))
router.post("/courses/:courseId", protect, asyncHandler(studentController.enrollCourse));
router.get("/attendance", protect, asyncHandler(studentController.getAttendance));



// POST /api/student/create-profile
// Authorization: Bearer <token>
// Content-Type: application/json

// {
//   "faculty": "Engineering",
//   "department": "Computer Science"
// }

router.post("/create-profile", protect, authorizeRoles("student"), asyncHandler(studentController.createProfile));




module.exports = router;


