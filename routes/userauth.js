const express = require("express");
const logics = require("../controller/userauth")

const router = express.Router();

router.post("/user-resgistration", logics.signUp)

router.post("/user-login", logics.login)


module.exports = router;