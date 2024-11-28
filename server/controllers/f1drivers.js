const f1 = require("../models/f1drivers")


exports.getAllDrivers =  async(req,res,next)=> {
    try {
      const data = await f1.find();
      if (data && data.length() !== 0 ) {
          return res.status(200).send({
              message: "got all f1 drivers",
              payload: data,
          })
      }
      res.status(404).send({
          message:"there was an error"
      })
  
    } catch (err) {
      res.status(500).send(err)
    }
  }


  
exports.getF1driverById = async(req,res,next) => {
    try {
        const data = await f1.findById(req.params.id)
        if (data) {
            return res.send(201).send({
                message:"f1 driver was found",
                payload:data,
            })
        }

        res.status(404).send({
            message:"there was an error"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}


exports.CreateF1driver = async(req,res,next) => {
    try {
 const data = new Car({
    name: req.body.name,
    age: req.body.age,
    wins: req.body.wins,
    Championship: req.body.Championship,
 })
 
 const result = await data.save()
 if (result) {
    return res.status(201).send({
        message: "f1 driver was created",
        payload: result,
    })
 }
 res.status(404).send({
    message:" f1 driver coudnt be created"
 })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updateF1driver = async(req,res,next) => {
    try {
        const data = {
            name:req.body.name,
            age: req.body.age,
            wins: req.body.wins,
            Championship:req.body.Championship,
        }
        const result = f1.findByIdAdUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "f1 driver updated",
                payload: f1.findById(req.params.id)
            })
        }

        res.status(500).send({
            message:"f1 driver not updated"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}



exports.deleteF1driver = async(req,res,next) => {
    try {
const result = f1.findByIdAndDelete(req.params.id);
if (result) {
    return res.status(200).send({
        message:"f1 driver deleted",
        payload:result
    })
}
res.status(500).send({
    message: "f1 driver not deleted"
})
    }catch (err) {
        res.status(500).send(err)
    }
}