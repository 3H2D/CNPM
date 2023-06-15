const db = require("../models");

const FeedbackResponse = db.feedbackResponse

const addFeedbackResponse = async(req, res) => {
    let info = {
        FeedbackID: req.body.FeedbackID,
        ResponseContent: req.body.ResponseContent,
        ResponderID: req.body.ResponderID,
    }

    try {
        const feedbackResponse = await FeedbackResponse.create(info);
        res.status(200).send(feedbackResponse);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

const getFeedbackResponse = async (req, res) => {
    let feedbackResponse = await FeedbackResponse.findAll({})
    res.status(200).send(feedbackResponse)
}

const updateFeedbackResponse = async (req, res) => {
    let id = req.params.id

    const feedbackResponse = await FeedbackResponse.update(req.body, {where: {id: id}})
    res.status(200).send(feedbackResponse)
}

const deleteFeedbackResponse = async (req, res) => {
    let id = req.params.id
    
    await FeedbackResponse.destroy({ where: { id: id }} )
    res.status(200).json({success: true})
}

module.exports = {
    addFeedbackResponse,
    getFeedbackResponse,
    updateFeedbackResponse,
    deleteFeedbackResponse
}