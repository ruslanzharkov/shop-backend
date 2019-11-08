import {Document} from 'mongoose';

export interface GameType extends Document {
    amount: number;
    createdByCompany: string;
    createdDate: string;
    description: string;
    name: string;
    postedBy: string;
    price: number;
    thumbnailPhoto: string;
    updatedDate: string;
}
