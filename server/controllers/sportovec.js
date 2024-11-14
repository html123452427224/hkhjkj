const Sportovec = require("../models/sportovec")


exports.getAllSportovec =  async(req,res,next)=> {
  try {
    const data = await Sportovec.find();
    if (data && data.length() !== 0 ) {
        return res.status(200).send({
            message: "got all sportovec",
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


exports.getSportovecById = async(req,res,next) => {
    try {
        const data = await Sportovec.findById(req.params.id)
        if (data) {
            return res.send(201).send({
                message:"sportovec was found",
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


exports.CreateSportovec = async(req,res,next) => {
    try {
 const data = new Sportovec({
    name: req.body.name,
    narodnost: req.body.narodnost,
    sport: req.body.sport,
 })
 
 const result = await data.save()
 if (result) {
    return res.status(201).send({
        message: "sportovec was created",
        payload: result,
    })
 }
 res.status(404).send({
    message:" sportovec coudnt be created"
 })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updateSportovec = async(req,res,next) => {
    try {
        const data = {
            name:req.body.name,
            narodnost: req.body.narodnost,
            sport: req.body.sport,
         
        }
        const result = Sportovec.findByIdAdUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "sportovec updated",
                payload: Sportovec.findById(req.params.id)
            })
        }

        res.status(500).send({
            message:"sportovec not updated"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}



exports.deleteSportovec = async(req,res,next) => {
    try {
const result = Sportovec.findByIdAndDeleted(req.params.id);
if (result) {
    return res.status(200).send({
        message:"sprotovec deleted",
        payload:result
    })
}
res.status(500).send({
    message: "sportovec not deleted"
})
    }catch (err) {
        res.status(500).send(err)
    }
}