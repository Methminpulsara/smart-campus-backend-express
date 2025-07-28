const express = require('express')
const router = express.Router();
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const ticketController = require('../controllers/ticket.controller');
const asyncHandler = require('../util/asyncHandler')

router.post('/', protect, authorizeRoles('student'), asyncHandler(ticketController.create));
router.get('/', protect, authorizeRoles('admin'), asyncHandler(ticketController.getAll));
router.put('/:id', protect, authorizeRoles('admin'), asyncHandler(ticketController.update));


module.exports = router;