const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboard.controller')
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const asyncHandler = require('../util/asyncHandler')


router.get('/stats',asyncHandler(dashboardController.getStats))
router.get('/enrollments',asyncHandler(dashboardController.getEnrollmentSummury))
router.get('/faculty-load',asyncHandler(dashboardController.facultyLoad))


module.exports =router;
