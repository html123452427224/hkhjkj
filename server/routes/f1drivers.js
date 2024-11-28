const express = require("express")
const router = express.Router()
const f1drivers = require("../controllers/f1drivers")



router.get("/",f1drivers.getAllDrivers )


router.get("/:id", f1drivers.getF1driverById)


router.post("/", f1drivers.CreateF1driver)

router.put("/:id" ,f1drivers.updateF1driver)

router.delete("/:id", f1drivers.deleteF1driver)

module.exports = router