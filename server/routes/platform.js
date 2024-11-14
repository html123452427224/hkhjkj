var express = require("express");
var router = express.router();
const platformController = require("../controllers/platform")


router.get("/", platformController.GetAllPlatforms)

router.get("/:id", platformController.GetPlatformById)

router.post("/", platformController.CreatePlatform)

router.put("/:id",platformController.updatePlatform)

router.delete("/:id", platformController.deletePlatform)
