import express from 'express';

const app: Express.Application = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello from ts shop backend');
});

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
