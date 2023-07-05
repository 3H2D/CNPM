module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "mh123",
  PORT: 3306,
  DB: "dp",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
