import express, { Application } from 'express';
const gamesRouter = require('./routes/games');

const app: Application = express();

const port = process.env.PORT || 3000;

app.use('/', gamesRouter);

try {
  app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
  });
} catch (e) {
  console.log(e);
}
