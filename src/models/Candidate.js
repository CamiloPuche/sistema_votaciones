// src/models/Candidate.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Candidate = sequelize.define('Candidate', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    party: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    tableName: 'candidates',
    timestamps: false,
});

module.exports = Candidate;

