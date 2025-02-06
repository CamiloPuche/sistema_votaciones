// src/controllers/voterController.js
const { Op } = require('sequelize');
const { Voter, Candidate } = require('../models/Relations');

const voterController = {
    createVoter: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const candidateExists = await Candidate.findOne({ where: { name } });
            if (candidateExists) {
                return res.status(400).json({ message: 'Un candidato no puede ser votante.' });
            }

            const voterExists = await Voter.findOne({ where: { name } });
            if (voterExists) {
                return res.status(400).json({ message: 'El votante ya está registrado.' });
            }

            const voterEmailExists = await Voter.findOne({ where: { email } });
            if (voterEmailExists) {
                return res.status(400).json({ message: 'El email ya está registrado como votante.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newVoter = await Voter.create({
                name,
                email,
                password: hashedPassword,
            });

            res.status(201).json({ message: 'Votante creado exitosamente.', voter: { id: newVoter.id, name: newVoter.name, email: newVoter.email } });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateVoter: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const voter = await Voter.findByPk(id);
            if (!voter) {
                return res.status(404).json({ message: 'Votante no encontrado.' });
            }

            voter.name = name ? name : voter.name;
            voter.email = email ? email : voter.email;
            await voter.save();

            res.status(200).json({ message: 'Votante actualizado exitosamente.', voter });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getVoters: async (req, res) => {
        try {
            const { page = 1, limit = 10, name } = req.query;

            const options = {
                attributes: ['id', 'name', 'email', 'has_voted'],
                where: {},
                offset: (parseInt(page) - 1) * parseInt(limit),
                limit: parseInt(limit),
            };

            if (name) {
                options.where.name = {
                    [Op.like]: `%${name}%`,
                };
            }
            const { count, rows } = await Voter.findAndCountAll(options);

            const totalPages = Math.ceil(count / limit);

            res.status(200).json({
                totalItems: count,
                totalPages,
                currentPage: parseInt(page),
                voters: rows,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getVoterById: async (req, res) => {
        try {
            const voter = await Voter.findByPk(req.params.id, { attributes: ['id', 'name', 'email', 'has_voted'] });
            if (!voter) {
                return res.status(404).json({ message: 'Votante no encontrado.' });
            }
            res.status(200).json(voter);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteVoter: async (req, res) => {
        try {
            const voter = await Voter.findByPk(req.params.id);
            if (!voter) {
                return res.status(404).json({ message: 'Votante no encontrado.' });
            }
            await voter.destroy();
            res.status(200).json({ message: 'Votante eliminado exitosamente.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = {
    voterController
};

