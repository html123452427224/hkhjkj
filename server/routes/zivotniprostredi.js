const express = require("express")
const router = express.Router();
const zivotniprostrediController = require("../controllers/zivotniprostredi")


router.get("/", zivotniprostrediController.GetAllZivotniProstredi )


router.get("/:id", zivotniprostrediController.GetZivotniProstrediById)

router.post("/", zivotniprostrediController.CreateZivotniProstredi)

router.put("/:id",zivotniprostrediController.updateZivotniProstredi)

router.delete("/:id", zivotniprostrediController.deleteZivotniProstredi)


module.exports = router;