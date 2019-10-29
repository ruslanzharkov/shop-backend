import express, { Router } from 'express';
import GamesController from '../controllers/Games.controller';

const router: Router = express.Router();

const gamesController = new GamesController();

router.get('/', gamesController.getGames.bind(this));

module.exports = router;