const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/candidates', candidateController.createCandidate);
router.get('/candidates', candidateController.getCandidates);
router.get('/candidates/:id', candidateController.getCandidateById);
router.delete('/candidates/:id', candidateController.deleteCandidate);
router.put('/candidates/:id', candidateController.updateCandidate);

module.exports = router;
