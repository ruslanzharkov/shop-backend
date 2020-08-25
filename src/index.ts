import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';

import {swaggerDocument} from './swagger/swaggerDocument';
import mongoose from './connections/mongo';
import gamesRouter from './routes/game';

const app: Application = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// all configurations need to paste before routing
app.use('/', gamesRouter);

mongoose.on('error', () => {
  console.log('> error occurred from the database');
});
mongoose.once('open', () => {
  console.log('> successfully opened the database');
});

try {
  app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
  });
} catch (e) {
  console.log(e);
}
