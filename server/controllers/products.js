const Product = require("../models/products")
 
exports.getAllproducts = async (req, res, next) => {
   try{
        const data = await Product.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Products found",
                payload: data
            })
        }
         res.status(404).send({
                message: "Products not found"
            })
       
   } catch(err){
        res.status(500).send(err)
   }
}
 
exports.getProductById = async (req, res, next) => {
    try{
        const data = await Product.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Product found",
                payload: data
            })
        }
         res.status(404).send({
                message: "Product not found"
            })
       
   } catch(err){
        res.status(500).send(err)
   }
}
 
exports.CreateProduct = async (req, res, next) => {
    try{
        const data = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })
        const result = await data.save(data);
        if (result){
            return res.status(201).send({
                message: "Product was created",
                payload: result
            })
        }res.status(404).send({
            message: "Wrong input"
        })  }
         catch(err){
        res.status(500).send(err)
   }
}
 
exports.updateProduct = async (req, res, next) => {
    try{
        const data = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })
        const result = studio.findByIdAndUpdate(req.params.id,data);
        if (result){
            return res.status(201).send({
                message: "Product was created",
                payload: result
            })
        }res.status(404).send({
            message: "Wrong input"
        })  }
         catch(err){
        res.status(500).send(err)
   }
}
 
exports.deleteProduct = async (req, res, next) => {
    try {

    } catch (err) {
        res.stat
    }
 
}