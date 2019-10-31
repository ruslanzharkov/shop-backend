import mongoose from 'mongoose';
import {mongoConfig} from '../configs/db';

mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default mongoose;
