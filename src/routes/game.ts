import express, { Router } from 'express';
import GamesController from '../controllers/Games.controller';

const router: Router = express.Router();

const gamesController = new GamesController();

router.get('/games', gamesController.getGames.bind(this));

router.post('/games', gamesController.createGame.bind(this));

export default router;
