const sequelize = require("../db");
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    status: {type: DataTypes.INTEGER},
    sex: {type: DataTypes.STRING},
    contentToken: {type: DataTypes.STRING},
})

const Job = sequelize.define('jobs', {
    title: {type: DataTypes.STRING},
})

module.exports = {
    User,
    Job
}