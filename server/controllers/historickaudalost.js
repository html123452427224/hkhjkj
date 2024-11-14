const HistorickaUdalost = require("../models/historickaudalost");


exports.GetAllHistorickaUdalost = async (req, res, next) => {
    try {
        const data = await HistorickaUdalost.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "HistorickaUdalost found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "HistorickaUdalost not found"
        })

    } catch (err) {
        res.status(500).send(err)

    }
}

exports.GetHistorickaUdalostById = async (req, res, next) => {
    try {
        const data = await HistorickaUdalost.findById(req.params.id)
        if (data) {
            return res.status(200).send({
                message: "HistorickaUdalost found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "Historicka Udalost not fond"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}

exports.CreateHistorickaUdalost = async (req, res, next) => {
    try {
        const data = new HistorickaUdalost({
            nameOfUdalosti: req.body.nameOfUdalosti,
            date: req.body.date,
            place: req.body.place,
        })

        const result = await data.save()
        if (result) {
            return res.status(201).send({
                message: "historicka udalost was created",
                payload: result,
            })
        }
        res.status(404).send({
            message: " historicka udalost coudnt be created"
        })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updateHistorickaUdalost = async (req, res, next) => {
    try {
        const data = {
            nameOfUdalosti: req.body.nameOfUdalosti,
            date: req.body.date,
            place: req.body.place,
        }
        const result = HistorickaUdalost.findByIdAndUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "historicka udalost updated",
                payload: HistorickaUdalost.findById(req.params.id)
            })
        }

        res.status(500).send({
            message: "historicka udalost not updated"
        })

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}


exports.deleteHistorickaUdalost = async (req, res, next) => {
    try {
        const result = HistorickaUdalost.findByIdAndDeleted(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "historicka udalost deleted",
                payload: result
            })
        }
        res.status(500).send({
            message: "historicka udalost not deleted"
        })
    } catch (err) {
        res.status(500).send(err)
    }
}