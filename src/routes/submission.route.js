const express = require('express');
const router = express.Router();
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

const submissionController = require('../controllers/subbmition.controller');

router.post('/', protect, authorizeRoles('student'), submissionController.submit);
router.get('/assignment/:id', protect, submissionController.getByAssignment);

module.exports =  router;
