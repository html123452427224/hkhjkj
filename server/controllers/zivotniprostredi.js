const ZivotniProstredi = require("../models/zivotniprostredi");


exports.GetAllZivotniProstredi = async(req, res,next) => {
    try {
        const data = await ZivotniProstredi.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "ZivotniProstredi found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "ZivotniProstredi not found"
        })

    } catch (err) {
        res.status(500).send(err)

    }
}

exports.GetZivotniProstrediById = async(req,res,next) =>{
    try {
        const data = await ZivotniProstredi.findById(req.params.id)
        if (data) {
            return res.status(200).send({
                message: "ZivotniProstredi found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "ZivotniProstredi not fond"
        })

    } catch (err) {
       res.status(500).send(err)
    }
}

exports.CreateZivotniProstredi = async(req,res,next) => {
    try {
 const data = new ZivotniProstredi({
    oblast: req.body.oblast,
    druhyRostlin: req.body.druhyRostlin,
    zvirata: req.body.zvirata,
 })
 
 const result = await data.save()
 if (result) {
    return res.status(201).send({
        message: "zivotni prostredi was created",
        payload: result,
    })
 }
 res.status(404).send({
    message:" zivotni prostredi coudnt be created"
 })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updateZivotniProstredi = async(req,res,next) => {
    try {
        const data = {
            oblast:req.body.oblast,
            druhyRostlin: req.body.druhyRostlin,
            zvirata: req.body.zvirata,
        }
        const result = ZivotniProstredi.findByIdAdUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "zivotni prostredi updated",
                payload: ZivotniProstredi.findById(req.params.id)
            })
        }

        res.status(500).send({
            message:"zivotni prostredi not updated"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}


exports.deleteZivotniProstredi = async(req,res,next) => {
    try {
const result = ZivotniProstredi.findByIdAndDeleted(req.params.id);
if (result) {
    return res.status(200).send({
        message:"zivotni prostredi deleted",
        payload:result
    })
}
res.status(500).send({
    message: "zivotni prostredi not deleted"
})
    }catch (err) {
        res.status(500).send(err)
    }
}