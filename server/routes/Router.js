const userController = require("../controllers/userController.js")

const feedbackController = require("../controllers/feedbackController.js")
const feedbackResponseController = require("../controllers/feedbackResponseController.js")
const householdController = require("../controllers/householdController.js")
const personController = require("../controllers/personController.js")
const temporaryAbsenceController = require("../controllers/temporaryAbsenceController.js")
const temporaryResidenceController = require("../controllers/temporaryResidenceController.js")

// router
const router = require('express').Router()

// use routers
router.post('/register', userController.register)

router.post('/feedback', feedbackController.addFeedback)
router.get('/feedback', feedbackController.getFeedback)
router.put('/feedback/:id', feedbackController.updateFeedback)
router.delete('/feedback/:id', feedbackController.deleteFeedback)

router.post('/feedback-response', feedbackResponseController.addFeedbackResponse)
router.get('/feedback-response', feedbackResponseController.getFeedbackResponse)
router.put('feedback-response/:id', feedbackResponseController.updateFeedbackResponse)
router.delete('/feedback-response/:id', feedbackResponseController.deleteFeedbackResponse)

router.post('/household', householdController.addHousehold)
router.get('/household', householdController.getHousehold)
router.put('/household/:id', householdController.updateHousehold)
router.delete('household/:id', householdController.deleteHousehold)

router.post('/person', personController.addPerson)
router.get('/person', personController.getPerson)
router.get('/person/:id', personController.getPersonById)
router.get('/person/:id/householder', personController.getHouseholderByMemberId)
router.get('/person/:id/member', personController.getHouseholdMemberListByMemberId)

router.put('/person/:id', personController.updatePerson)
router.delete('/person/:id', personController.deletePerson)

router.post('/temporary-absence', temporaryAbsenceController.addTemporaryAbsence)
router.get('/temporary-absence', temporaryAbsenceController.getTemporaryAbsence)
router.put('/temporary-absence/:id', temporaryAbsenceController.updateTemporaryAbsence)
router.delete('/temporary-absence/:id', temporaryAbsenceController.deleteTemporaryAbsence)

router.post('/temporary-residence', temporaryResidenceController.addTemporaryResidence)
router.get('/temporary-residence', temporaryResidenceController.getTemporaryResidence)
router.put('/temporary-residence/:id', temporaryResidenceController.updateTemporaryResidence)
router.delete('/temporary-residence/:id', temporaryResidenceController.deleteTemporaryResidence)

module.exports = router