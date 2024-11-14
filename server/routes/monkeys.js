const express = require("express")
const router = express.Router();
const monkey= require("../controllers/monkeys")


router.get("/", monkey.getAllMonkeys )


router.get("/:id", monkey.getMonkeysById,)

router.post("/", monkey.CreateMonkey)

router.put("/:id",monkey.updateMonkey)

router.delete("/:id", monkey.deleteMonkey)


module.exports = router