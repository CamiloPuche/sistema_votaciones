// src/models/index.js
const Voter = require('./Voter');
const Candidate = require('./Candidate');
const Vote = require('./Vote');

Voter.hasOne(Vote, { foreignKey: 'voter_id' });
Vote.belongsTo(Voter, { foreignKey: 'voter_id' });

Candidate.hasMany(Vote, { foreignKey: 'candidate_id' });
Vote.belongsTo(Candidate, { foreignKey: 'candidate_id' });

module.exports = {
    Voter,
    Candidate,
    Vote,
};
