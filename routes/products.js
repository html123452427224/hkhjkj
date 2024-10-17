var express = require('express');
var router = express.Router();
const productsController = require("../controllers/products")
 
/* GET users listing. */
router.get('/', productsController.getAllproducts);
 
router.get('/:id',  productsController.getProductById);
 
router.post('/',  productsController.CreateProduct);
 
router.put('/:id',  productsController.updateProduct);
 
router.delete('/:id', productsController.deleteProduct );
 
module.exports = router;
 