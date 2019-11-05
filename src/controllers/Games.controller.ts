import { Request, Response } from 'express-serve-static-core';
import GameModel from '../models/game';

class GamesController {
    public getGames(req: Request, res: Response) {
        res.send({
            games: [],
        });
    }

    public createGame(req: Request, res: Response) {
        const data = req.body;
        res.send(data);
    }
}

export default GamesController;
