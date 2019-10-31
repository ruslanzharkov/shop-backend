import express, { Application } from 'express';
import mongoose from './connections/mongo';

const gamesRouter = require('./routes/games');
const db = mongoose.connection;

const app: Application = express();

const port = process.env.PORT || 3000;

app.use('/', gamesRouter);

db.on('error', () => {
  console.log('> error occurred from the database');
});
db.once('open', () => {
  console.log('> successfully opened the database');
});

try {
  app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
  });
} catch (e) {
  console.log(e);
}
