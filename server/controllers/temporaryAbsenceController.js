const db = require("../models");

const TemporaryAbsence = db.temporaryAbsence

const addTemporaryAbsence = async(req, res) => {
    let info = {
        personId: req.body.personId,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        Destination: req.body.Destination,
        Reason: req.body.Reason,
        check: req.body.check,
    }

    try {
        const temporaryAbsence = await TemporaryAbsence.create(info);
        res.status(200).send(temporaryAbsence);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

const getTemporaryAbsence = async (req, res) => {
    let temporaryAbsence = await TemporaryAbsence.findAll({})
    res.status(200).send(temporaryAbsence)
}

const updateTemporaryAbsence = async (req, res) => {
    let id = req.params.id

    const temporaryAbsence = await TemporaryAbsence.update(req.body, {where: {id: id}})
    res.status(200).send(temporaryAbsence)
}

const deleteTemporaryAbsence = async (req, res) => {
    let id = req.params.id
    
    await TemporaryAbsence.destroy({ where: { id: id }} )
    res.status(200).json({success: true})
}

module.exports = {
    addTemporaryAbsence,
    getTemporaryAbsence,
    updateTemporaryAbsence,
    deleteTemporaryAbsence
}