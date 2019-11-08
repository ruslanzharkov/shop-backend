import mongoose, {Error} from 'mongoose';
import {mongoConfig} from '../configs/db';

function createMongoConnection() {
    return mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`, {
        autoReconnect: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err: Error) => {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err.message);
            setTimeout(createMongoConnection, 5000);
        }
    });
}

createMongoConnection();

const db = mongoose.connection;

export default db;
