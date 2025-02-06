// src/controllers/voteController.js

const { Vote, Voter, Candidate } = require('../models/Relations');

const voteController = {
    castVote: async (req, res) => {
        try {
            const userId = req.userId;
            const { candidate_id } = req.body;

            if (!userId) {
                return res.status(400).json({ message: 'Votante no proporcionado.' });
            }

            const voter = await Voter.findByPk(userId);
            if (!voter) {
                return res.status(404).json({ message: 'Votante no encontrado.' });
            }

            if (voter.has_voted) {
                return res.status(400).json({ message: 'El votante ya ha emitido un voto.' });
            }

            const candidate = await Candidate.findByPk(candidate_id);
            if (!candidate) {
                return res.status(404).json({ message: 'Candidato no encontrado.' });
            }

            await Vote.create({ voter_id: voter.id, candidate_id });

            voter.has_voted = true;
            await voter.save();

            candidate.votes += 1;
            await candidate.save();

            res.status(201).json({ message: 'Voto emitido exitosamente.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getVotes: async (req, res) => {
        try {
            const votes = await Vote.findAll({
                include: [
                    { model: Voter, attributes: ['id', 'name', 'email', 'password', 'has_voted'] },
                    { model: Candidate, attributes: ['id', 'name', 'party', 'votes'] }
                ]
            });
            res.status(200).json(votes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getVoteById: async (req, res) => {
        try {
            const vote = await Vote.findByPk(req.params.id, {
                include: [
                    { model: Voter, attributes: ['id', 'name', 'email', 'password', 'has_voted'] },
                    { model: Candidate, attributes: ['id', 'name', 'party', 'votes'] }
                ]
            });
            if (!vote) {
                return res.status(404).json({ error: 'Voto no encontrado.' });
            }
            res.status(200).json(vote);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteVote: async (req, res) => {
        try {
            const vote = await Vote.findByPk(req.params.id);
            if (!vote) {
                return res.status(404).json({ error: 'Voto no encontrado.' });
            }
            await vote.destroy();
            res.status(200).json({ message: 'Voto eliminado exitosamente.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getStatistics: async (req, res) => {
        try {
            const candidates = await Candidate.findAll();

            const totalVotes = await Vote.count();

            const votersCount = await Voter.count({ where: { has_voted: true } });

            const stats = candidates.map(candidate => {
                const percentage = totalVotes
                    ? ((candidate.votes / totalVotes) * 100).toFixed(2)
                    : '0.00';
                return {
                    candidate: candidate.name,
                    votes: candidate.votes,
                    percentage: `${percentage}%`,
                };
            });

            res.status(200).json({
                totalVotes,
                votersCount,
                statistics: stats,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateVote: async (req, res) => {
        try {
            const { id } = req.params;
            const { voterId, candidateId } = req.body;

            const vote = await Vote.findByPk(id);
            if (!vote) {
                return res.status(404).json({ error: 'Voto no encontrado.' });
            }

            const voter = await Voter.findByPk(voterId);
            if (!voter) {
                return res.status(400).json({ error: 'Votante no encontrado.' });
            }

            const candidate = await Candidate.findByPk(candidateId);
            if (!candidate) {
                return res.status(400).json({ error: 'Candidato no encontrado.' });
            }

            vote.voterId = voterId;
            vote.candidateId = candidateId;
            await vote.save();

            res.status(200).json({ message: 'Voto actualizado exitosamente.', vote });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = voteController;
