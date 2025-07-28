const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmet.controller');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/', protect, authorizeRoles('faculty'), assignmentController.createAssignment);
router.get('/course/:courseId', protect, assignmentController.getAssignmentsByCourse);

module.exports = router;