const Sequelize = require('sequelize')
const User = require('../models/User')
const Receipt = require('../models/Receipt')
const dbConfig = require('./config')

const connection = new Sequelize(dbConfig)

User.init(connection)
Receipt.init(connection)

User.associate(connection.models)
Receipt.associate(connection.models)

module.exports = connection