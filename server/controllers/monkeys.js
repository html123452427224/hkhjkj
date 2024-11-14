const monkeys = require("../models/monkeys");


exports.getAllMonkeys = async (req, res, next) => {
    try {
        const data = await monkeys.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "monkeys found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "monkeys not found"
        })

    } catch (err) {
        res.status(500).send(err)

    }
}

exports.getMonkeysById = async (req, res, next) => {
    try {
        const data = await monkeys.findById(req.params.id)
        if (data) {
            return res.status(200).send({
                message: "monkeys found",
                payload: data,
            })
        }
        res.status(404).send({
            message: "monkeys  not fond"
        })

    } catch (err) {
        res.status(500).send(err)
    }
}

exports.CreateMonkey = async (req, res, next) => {
    try {
        const data = new monkeys({
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name,
        })

        const result = await data.save()
        if (result) {
            return res.status(201).send({
                message: "monkey was created",
                payload: result,
            })
        }
        res.status(404).send({
            message: " monkey coudnt be created"
        })
    } catch (err) {
        res.status(500).send(err)

    }
}


exports.updateMonkey = async (req, res, next) => {
    try {
        const data = {
            gender: req.body.gender,
            race: req.body.race,
            name: req.body.name,
        }
        const result = monkeys.findByIdAndUpdate(req.params.id, data)
        if (result) {
            return res.status(200).send({
                message: "monkeys  updated",
                payload: monkeys.findById(req.params.id)
            })
        }

        res.status(500).send({
            message: "monkey not updated"
        })

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}


exports.deleteMonkey = async (req, res, next) => {
    try {
        const result = monkeys.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "monkeys deleted",
                payload: result
            })
        }
        res.status(500).send({
            message: "monkeys not deleted"
        })
    } catch (err) {
        res.status(500).send(err)
    }
}