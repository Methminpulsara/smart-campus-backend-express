const express = require('express')
const router= express.Router();
const facultyController = require('../controllers/faculty.controller')
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const asyncHandler = require('../util/asyncHandler')


//   EKKWTH THMA PROTECT KLE NH 

// faculty eke profile eka create krnn 
router.post('/create-profile',protect,authorizeRoles('faculty'),asyncHandler(facultyController.createProfile))


router.get('/profile',asyncHandler(facultyController.getProfile))
router.put('/profile',asyncHandler(facultyController.updateProfile))
router.post('/assing/:id',asyncHandler(facultyController.assingCourse))
router.post('/attendance/mark',asyncHandler(facultyController.markAtteAttendance))

module.exports = router;