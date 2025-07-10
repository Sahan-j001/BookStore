const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../Model/UserModel");
//Set usercontroller
const UserController = require("../Controllers/UserController");

// If UserController exports an object with methods, use the correct method, e.g., getUsers
router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

//export
module.exports = router;