const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const {protect,authorizeRoles} = require("../middleware/authMiddleware");
const asyncHandler = require("../util/asyncHandler");


router.get("/users",protect,authorizeRoles("admin"), asyncHandler(adminController.getAllUsers));
router.delete("/users/:id",protect, authorizeRoles("admin"), asyncHandler(adminController.deleteUser));
router.put("/users/:id/role",protect,authorizeRoles("admin"), asyncHandler(adminController.changeRole));
module.exports = router;