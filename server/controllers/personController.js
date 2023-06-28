const db = require("../models");
const { Op } = require("sequelize");

const Person = db.person

const addPerson = async(req, res) => {
    let info = {
        Name: req.body.Name,
        Birthday: req.body.Birthday,
        BirthPlace: req.body.BirthPlace,
        OriginPlace: req.body.OriginPlace,
        ResidencyRegistrationDate: req.body.ResidencyRegistrationDate,
        PreviousResidencyAddress: req.body.PreviousResidencyAddress,
        IsHouseholder: req.body.IsHouseholder,
        RelationshipWithHouseholder: req.body.RelationshipWithHouseholder,
        householdId: req.body.householdId
    }

    try {
        const person = await Person.create(info);
        res.status(200).send(person);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}

const getPerson = async (req, res) => {
    let person = await Person.findAll({})
    res.status(200).send(person)
}

const getPersonById = async (req, res) => {
    let id = req.params.id

    const person = await Person.findAll({where: {id: id}})
    res.status(200).send(person)
}

const getHouseholderByMemberId = async (req, res) => {
    let personId = req.params.id

    const member = await Person.findOne({where: {id: personId}, attributes: ['householdId']})

    const householder = await Person.findOne({where: {householdId: member.dataValues.householdId, IsHouseholder: true}})

    res.status(200).send(householder)
}

const getHouseholdMemberListByMemberId = async (req, res) => {
    let personId = req.params.id

    const member = await Person.findOne({where: {id: personId}, attributes: ['householdId']})

    const memberList = await Person.findAll({where: {householdId: member.dataValues.householdId}})

    res.status(200).send(memberList);
}

const updatePerson = async (req, res) => {
    let id = req.params.id

    const person = await Person.update(req.body, {where: {id: id}})
    res.status(200).send(person)
}

const deletePerson = async (req, res) => {
    let id = req.params.id
    
    await Person.destroy({ where: { id: id }} )
    res.status(200).json({success: true})
}

module.exports = {
    addPerson,
    getPerson,
    getPersonById,
    getHouseholderByMemberId,
    getHouseholdMemberListByMemberId,
    updatePerson,
    deletePerson
}