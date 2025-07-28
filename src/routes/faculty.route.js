const express = require('express')
const router= express.Router();
const facultyController = require('../controllers/faculty.controller')
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const asyncHandler = require('../util/asyncHandler')


//   EKKWTH THMA PROTECT KLE NH 
router.get('/profile',asyncHandler(facultyController.getProfile))
router.put('/profile',asyncHandler(facultyController.updateProfile))
router.post('/assing/:id',asyncHandler(facultyController.assingCourse))
router.post('/attendance/mark',asyncHandler(facultyController.markAtteAttendance))

module.exports = router;