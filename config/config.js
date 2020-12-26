const Config = require("../db/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(Config.DB, Config.USER, Config.PASSWORD, {
  host: Config.HOST,
  dialect: Config.DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// DATABASE TABLES
db.dtypes = require("../models/dModel.js")(sequelize, Sequelize);
db.assets = require("../models/assetModel.js")(sequelize, Sequelize);
db.customers = require("../models/signupModel.js")(sequelize, Sequelize);

module.exports = db;