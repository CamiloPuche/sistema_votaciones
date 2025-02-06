// src/controllers/authController.js

const { Voter, Candidate } = require('../models/Relations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const candidateExists = await Candidate.findOne({ where: { name } });
            if (candidateExists) {
                return res.status(400).json({ message: 'Un candidato no puede ser votante.' });
            }

            const voterExists = await Voter.findOne({ where: { name } });
            if (voterExists) {
                return res.status(400).json({ message: 'El nombre ya está registrado.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newVoter = await Voter.create({
                name,
                email,
                password: hashedPassword,
            });

            const token = jwt.sign({ id: newVoter.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ message: 'Votante registrado exitosamente.', token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { name, password } = req.body;

            const voter = await Voter.findOne({ where: { name } });
            if (!voter) {
                return res.status(400).json({ message: 'Nombre o contraseña incorrectos.' });
            }

            const isMatch = await bcrypt.compare(password, voter.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Nombre o contraseña incorrectos.' });
            }

            const token = jwt.sign({ id: voter.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ message: 'Inicio de sesión exitoso.', token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = authController;
