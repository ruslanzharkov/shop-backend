import { Request, Response } from 'express-serve-static-core';

class GamesController {
    getGames(req: Request, res: Response) {
        res.send({
            games: [
                {
                    id: 1,
                    name: 'Warcraft 2'
                },
                {
                    id: 2,
                    name: 'Warcraft 3'
                }
            ]
        });
    }

}

export default GamesController;