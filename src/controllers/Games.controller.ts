import { Request, Response } from 'express-serve-static-core';
import {GameType} from 'game.type.ts';
import {Error} from 'mongoose';
import GameModel from '../models/game';

class GamesController {
    public getGames(req: Request, res: Response) {
        GameModel.find((err: Error, documents: GameType[]) => {
            if (err) {
                res.send({
                    message: 'Cannot get documents from db',
                });
            }
            res.send({
                items: documents,
                totalCount: documents.length,
            });
        });
    }

    public createGame(req: Request, res: Response) {
        const data: GameType = req.body;
        const game = new GameModel({
            amount: data.amount,
            createdByCompany: data.createdByCompany,
            createdDate: data.createdDate,
            description: data.description,
            name: data.name,
            postedBy: data.postedBy,
            price: data.price,
            thumbnailPhoto: data.thumbnailPhoto,
            updatedDate: data.updatedDate,
        });

        game.save()
            .then((product: GameType) => {
                res.send(product);
            })
            .catch((err: Error) => {
                res.send(err);
            });

        res.send(data);
    }
}

export default GamesController;
