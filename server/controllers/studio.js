const Studio = require("../models/studio")


exports.GetAllStudios = async (req,res,next) => {
try {
   const data = await Studio.find();

   if (data && data.length !==0) {
    return res.status(200).send({
        message: "Studios found",
        payload: data,
    })
   }

   res.status(404).send({
    message:"didnt find studios"
   })
} catch (err) {
    res.status(500).send(err)
}
}


exports.GetStudioById = async(req,res,next) => {
    const data = await Studio.findById(req.params.id);
try {
    if (data) {
        return res.status(200).send({
            message: "studio was found",
            payload:data,
        })
       }
       res.status(500).send({
        message: "studio has not been found"
       })
} catch (err) {
res.status(500).send(err)
}
}


exports.CreateStudios = async (req,res,next)=> {

    try {
        const data = new Studio({
          name: req.body.name,
          employees: req.body.employees,
          game: req.body.game,
        })

        const result = data.save()
        if (result) {
            return res.status(200).send({
                message: "studio was created",
                payload: result,
            })
        }

        res.status(500).send({
            message: "there was an error"
        })
    } catch (err) {
        res.status(500).send(err)
    }
    
}

exports.UpdateStudioById = async (req,res,next) => {
    try {
        const data = {
            name:req.body.name,
            employees:req.body.employees,
            game:req.body.name,
        }

        const result = await data.save();

        if (result) {
            return res.status(200).send({
                message: "studio has been updated",
                payload : result,
            })
        }

        res.status(404).send({
            message: "there was an error"
        })
    } catch (err) {
        res.status(500).send(err)
    }
}