const express = require("express")
const router = express.Router();
const historickaudalostController = require("../controllers/historickaudalost")


router.get("/", historickaudalostController.GetAllHistorickaUdalost )


router.get("/:id", historickaudalostController.GetHistorickaUdalostById)

router.post("/", historickaudalostController.CreateHistorickaUdalost)

router.put("/:id",historickaudalostController.updateHistorickaUdalost)

router.delete("/:id", historickaudalostController.deleteHistorickaUdalost)
module.exports = router