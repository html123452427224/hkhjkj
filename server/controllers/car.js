const Car = require("../models/car")


exports.getAllCars =  async(req,res,next)=> {
  try {
    const data = await Car.find();
    if (data && data.length() !== 0 ) {
        return res.status(200).send({
            message: "got all cars",
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


exports.getCarById = async(req,res,next) => {
    try {
        const data = await Car.findById(req.params.id)
        if (data) {
            return res.send(201).send({
                message:"car was found",
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


exports.CreateCar = async(req,res,next) => {
    try {
 const data = new Car({
    znacka: req.body.znacka,
    model: req.body.model,
    rokvyroby: req.body.rokvyroby,
    typmotoru: req.body.typmotoru,
 })
 
 const result = await data.save()
 if (result) {
    return res.status(201).send({
        message: "Car was created",
        payload: result,
    })
 }
 res.status(404).send({
    message:" car coudnt be created"
 })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updateCar = async(req,res,next) => {
    try {
        const data = {
            znacka:req.body.znacka,
            model: req.body.model,
            rokvyroby: req.body.rokvyroby,
            typmotoru:req.body.typmotoru,
        }
        const result = Car.findByIdAdUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "car updated",
                payload: Car.findById(req.params.id)
            })
        }

        res.status(500).send({
            message:"car not updated"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}



exports.deleteCar = async(req,res,next) => {
    try {
const result = Car.findByIdAndDelete(req.params.id);
if (result) {
    return res.status(200).send({
        message:"Car deleted",
        payload:result
    })
}
res.status(500).send({
    message: "Car not deleted"
})
    }catch (err) {
        res.status(500).send(err)
    }
}