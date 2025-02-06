const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/votes', authMiddleware, voteController.castVote);
router.get('/votes', voteController.getVotes);
router.get('/votes/statistics', voteController.getStatistics);
router.get('/votes/:id', voteController.getVoteById);
router.delete('/votes/:id', voteController.deleteVote);
router.put('/votes/:id', voteController.updateVote);

module.exports = router;



