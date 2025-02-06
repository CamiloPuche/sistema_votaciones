const express = require('express');
const router = express.Router();
const { voterController } = require('../controllers/voterController');

router.post('/voters', voterController.createVoter);
router.get('/voters', voterController.getVoters);
router.get('/voters/:id', voterController.getVoterById);
router.delete('/voters/:id', voterController.deleteVoter);
router.put('/voters/:id', voterController.updateVoter);

module.exports = router;
