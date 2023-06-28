const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./userModel.js")(sequelize, DataTypes);
db.feedback = require("./feedbackModel.js")(sequelize, DataTypes);
db.feedbackResponse = require("./feedbackResponseModel.js")(
  sequelize,
  DataTypes
);
db.household = require("./householdModel.js")(sequelize, DataTypes);
db.person = require("./personModel.js")(sequelize, DataTypes);
db.temporaryAbsence = require("./temporaryAbsenceModel.js")(
  sequelize,
  DataTypes
);
db.temporaryResidence = require("./temporaryResidenceModel.js")(
  sequelize,
  DataTypes
);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

db.household.hasMany(db.person);
db.person.belongsTo(db.household);

db.person.hasMany(db.temporaryAbsence);
db.temporaryAbsence.belongsTo(db.person);

db.person.hasMany(db.temporaryResidence);
db.temporaryResidence.belongsTo(db.person);

db.person.hasMany(db.feedback);
db.feedback.belongsTo(db.person);

// db.user.hasMany(db.feedbackResponse);
// db.feedbackResponse.belongsTo(db.user, {
//     foreignKey: "ResponderId"
// });

db.feedback.hasMany(db.feedbackResponse);
db.feedbackResponse.belongsTo(db.feedback);

module.exports = db;
