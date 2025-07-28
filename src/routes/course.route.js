const express = require("express");
const router = express.Router(); 

const courseController = require('../controllers/course.controller');
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const asyncHandler = require('../util/asyncHandler');


router.put("/:id",protect,authorizeRoles("admin"), asyncHandler(courseController.updateCourse));
router.delete("/:id",protect,authorizeRoles("admin"), asyncHandler(courseController.deleteCourse));
router.post('/',protect,asyncHandler(courseController.createCourse))
router.get('/',protect,asyncHandler(courseController.getAllCourses))
router.get('/:id',protect,asyncHandler(courseController.getCourseById))

module.exports = router;
