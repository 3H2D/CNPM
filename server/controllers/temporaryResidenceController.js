const db = require("../models");

const TemporaryResidence = db.temporaryResidence

const addTemporaryResidence = async(req, res) => {
    let info = {
        personId: req.body.personId,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        PreviousResidenceAddress: req.body.PreviousResidenceAddress,
    }

    try {
        const temporaryResidence = await TemporaryResidence.create(info);
        res.status(200).send(temporaryResidence);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

const getTemporaryResidence = async (req, res) => {
    let temporaryResidence = await TemporaryResidence.findAll({})
    res.status(200).send(temporaryResidence)
}

const updateTemporaryResidence = async (req, res) => {
    let id = req.params.id

    const temporaryResidence = await TemporaryResidence.update(req.body, {where: {id: id}})
    res.status(200).send(temporaryResidence)
}

const deleteTemporaryResidence = async (req, res) => {
    let id = req.params.id
    
    await TemporaryResidence.destroy({ where: { id: id }} )
    res.status(200).json({success: true})
}

module.exports = {
    addTemporaryResidence,
    getTemporaryResidence,
    updateTemporaryResidence,
    deleteTemporaryResidence
}