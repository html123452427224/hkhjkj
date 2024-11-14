const express = require("express")
const router = express.Router();
const sportovecController = require("../controllers/sportovec")


router.get("/", sportovecController.getAllSportovec )


router.get("/:id", sportovecController.getSportovecById)

router.post("/", sportovecController.CreateSportovec)

router.put("/:id",sportovecController.updateSportovec)

router.delete("/:id", sportovecController.deleteSportovec)
module.exports = router