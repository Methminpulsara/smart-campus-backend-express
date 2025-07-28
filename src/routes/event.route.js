const express = require("express");
const router = express.Router();
const {protect,authorizeRoles} = require("../middleware/authMiddleware");
const asyncHandler = require("../util/asyncHandler");

const eventController = require('../controllers/event.controller');
router.post('/', protect, authorizeRoles('admin'), asyncHandler(eventController.create));
router.get('/', asyncHandler(eventController.getAll));

module.exports = router;