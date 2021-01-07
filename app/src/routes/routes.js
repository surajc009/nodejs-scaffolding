const express = require("express")
const router = express.Router()
const personController = require("../controllers/person-controller")
router.post("/test", personController.create)
module.exports = router
