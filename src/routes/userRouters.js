const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller")
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
const asyncHandler = require('../util/asyncHandler')

router.get('/',protect,authorizeRoles("admin"),asyncHandler(adminController.getAllUsers))
router.put('/users/:id/role',protect,authorizeRoles("admin"),asyncHandler(adminController.changeRole))
router.delete('/user/:id',protect,authorizeRoles("admin"),asyncHandler(adminController.deleteUser))

module.exports = router;

