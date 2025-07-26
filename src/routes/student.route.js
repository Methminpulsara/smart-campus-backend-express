const express = require('express')
const router = express.Router();
const studentController = require('../controllers/student.controller');
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const asyncHandler = require('../util/asyncHandler')

router.get('/profile',protect,asyncHandler(studentController.getProfile))
router.put('/update',protect,asyncHandler(studentController.updateProfile))
router.post("/courses/:courseId", protect, asyncHandler(studentController.enrollCourse));
router.get("/attendance", protect, asyncHandler(studentController.getAttendance));

module.exports = router;