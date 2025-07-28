const express = require("express");
const router = express.Router();
const {protect,authorizeRoles} = require("../middleware/authMiddleware");
const asyncHandler = require("../util/asyncHandler");

const noticeController = require('../controllers/notice.controller');


router.post('/', protect, authorizeRoles('faculty', 'admin'), noticeController.create);
router.get('/', noticeController.getAll);

module.exports = router;