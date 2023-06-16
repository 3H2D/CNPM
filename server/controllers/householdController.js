const db = require("../models");

const Household = db.household

const addHousehold = async(req, res) => {
    let info = {
        HouseholdNumber: req.body.HouseholdNumber,
        Location: req.body.Location,
        HouseholderId: req.body.HouseholderId,
        personId: req.body.personId
    }

    try {
        const household = await Household.create(info);
        res.status(200).send(household);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

const getHousehold = async (req, res) => {
    let household = await Household.findAll({})
    res.status(200).send(household)
}

const updateHousehold = async (req, res) => {
    let id = req.params.id

    const household = await Household.update(req.body, {where: {id: id}})
    res.status(200).send(household)
}

const deleteHousehold = async (req, res) => {
    let id = req.params.id
    
    await Household.destroy({ where: { id: id }} )
    res.status(200).json({success: true})
}

module.exports = {
    addHousehold,
    getHousehold,
    updateHousehold,
    deleteHousehold
}