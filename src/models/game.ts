import {GameType} from 'game.type.ts';
import {Schema} from 'mongoose';
import mongoose from '../connections/mongo';

const gameSchema = new Schema({
    amount: {type: Number, required: true},
    createdByCompany: {type: String, required: true},
    createdDate: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    postedBy: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    thumbnailPhoto: {type: String, required: true},
    updatedDate: {type: String, required: true},
});

export default mongoose.model<GameType>('Game', gameSchema);
