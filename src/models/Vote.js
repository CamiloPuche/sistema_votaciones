const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Voter = require('./Voter');
const Candidate = require('./Candidate');

const Vote = sequelize.define('Vote', {
    voter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Voter,
            key: 'id',
        },
    },
    candidate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Candidate,
            key: 'id',
        },
    },
}, {
    tableName: 'votes',
    timestamps: false,
});

module.exports = Vote;
