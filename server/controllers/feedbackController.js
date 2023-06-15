const db = require("../models");

const Feedback = db.feedback

const addFeedback = async(req, res) => {
    let info = {
        PersonID: req.body.PersonID,
        Content: req.body.Content,
        Category: req.body.Category,
        Status: req.body.Status
    }

    try {
        const feedback = await Feedback.create(info);
        res.status(200).send(feedback);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

const getFeedback = async (req, res) => {
    let feedback = await Feedback.findAll({})
    res.status(200).send(feedback)
}

const updateFeedback = async (req, res) => {
    let id = req.params.id

    const feedback = await Feedback.update(req.body, {where: {id: id}})
    res.status(200).send(feedback)
}

const deleteFeedback = async (req, res) => {
    let id = req.params.id
    
    await Feedback.destroy({ where: { id: id }} )
    res.status(200).json({success: true})
}

module.exports = {
    addFeedback,
    getFeedback,
    updateFeedback,
    deleteFeedback
}