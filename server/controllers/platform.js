const Platform = require("../models/platform");


exports.GetAllPlatforms = async(req, res,next) => {
    try {
        const data = await Platform.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Platform found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "Platform not found"
        })

    } catch (err) {
        res.status(500).send(err)

    }
}

exports.GetPlatformById = async(req,res,next) =>{
    try {
        const data = await Platform.findById(req.params.id)
        if (data) {
            return res.status(200).send({
                message: "Platform found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "Platform not fond"
        })

    } catch (err) {
       res.status(500).send(err)
    }
}

exports.CreatePlatform = async(req,res,next) => {
    try {
 const data = new Platform({
    name: req.body.name,
    manufactorer: req.body.manufactorer,
    releaseDate: req.body.releaseDate,
 })
 
 const result = await data.save()
 if (result) {
    return res.status(201).send({
        message: "Platform was created",
        payload: result,
    })
 }
 res.status(404).send({
    message:" Platform coudnt be created"
 })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updatePlatform = async(req,res,next) => {
    try {
        const data = {
            name:req.body.name,
            manufactorer: req.body.manufactorer,
            releaseDate: req.body.releaseDate
        }
        const result = Platform.findByIdAdUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "platform updated",
                payload: Platform.findById(req.params.id)
            })
        }

        res.status(500).send({
            message:"platform not updated"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}


exports.deletePlatform = async(req,res,next) => {
    try {
const result = Platform.findByIdAndDeleted(req.params.id);
if (result) {
    return res.status(200).send({
        message:"Platform deleted",
        payload:result
    })
}
res.status(500).send({
    message: "platform not deleted"
})
    }catch (err) {
        res.status(500).send(err)
    }
}