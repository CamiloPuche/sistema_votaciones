// src/controllers/candidateController.js
const { Op } = require('sequelize');
const { Candidate, Voter } = require('../models/Relations');

const candidateController = {
    createCandidate: async (req, res) => {
        try {
            const { name, party } = req.body;

            if (!name || !party) {
                return res.status(400).json({ message: 'El nombre y el partido son obligatorios.' });
            }

            const voterExists = await Voter.findOne({ where: { name } });
            if (voterExists) {
                return res.status(400).json({ message: 'Un votante no puede ser candidato.' });
            }

            const candidateExists = await Candidate.findOne({ where: { name } });
            if (candidateExists) {
                return res.status(400).json({ message: 'El candidato ya está registrado.' });
            }

            const newCandidate = await Candidate.create({ name, party });
            res.status(201).json(newCandidate);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateCandidate: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, party } = req.body;
            const candidate = await Candidate.findByPk(id);
            if (!candidate) {
                return res.status(404).json({ message: 'Candidato no encontrado.' });
            }

            candidate.name = name || candidate.name;
            candidate.party = party || candidate.party;
            await candidate.save();

            res.status(200).json({ message: 'Candidato actualizado exitosamente.', candidate });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCandidates: async (req, res) => {
        try {
            const { page = 1, limit = 10, name, party } = req.query;

            const options = {
                attributes: ['id', 'name', 'party', 'votes'],
                where: {},
                offset: (parseInt(page) - 1) * parseInt(limit),
                limit: parseInt(limit),
            };

            if (name) {
                options.where.name = {
                    [Op.like]: `%${name}%`,
                };
            }

            if (party) {
                options.where.party = {
                    [Op.like]: `%${party}%`,
                };
            }

            const { count, rows } = await Candidate.findAndCountAll(options);

            const totalPages = Math.ceil(count / limit);

            res.status(200).json({
                totalItems: count,
                totalPages,
                currentPage: parseInt(page),
                candidates: rows,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCandidateById: async (req, res) => {
        try {
            const candidate = await Candidate.findByPk(req.params.id);
            if (!candidate) {
                return res.status(404).json({ message: 'Candidato no encontrado.' });
            }
            res.status(200).json(candidate);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteCandidate: async (req, res) => {
        try {
            const candidate = await Candidate.findByPk(req.params.id);
            if (!candidate) {
                return res.status(404).json({ message: 'Candidato no encontrado.' });
            }
            await candidate.destroy();
            res.status(200).json({ message: 'Candidato eliminado exitosamente.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = candidateController;
