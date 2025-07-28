const express = require("express");
const router = express.Router();
const {protect,authorizeRoles} = require("../middleware/authMiddleware");
const asyncHandler = require("../util/asyncHandler");
const adminController = require("../controllers/admin.controller");


router.get("/users",protect,authorizeRoles("admin"), asyncHandler(adminController.getAllUsers));
router.delete("/users/:id",protect, authorizeRoles("admin"), asyncHandler(adminController.deleteUser));
router.put("/users/:id/role",protect,authorizeRoles("admin"), asyncHandler(adminController.changeRole));
module.exports = router;