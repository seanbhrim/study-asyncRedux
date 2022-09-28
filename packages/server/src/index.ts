import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
const port = 8080;

app.use(express.json())
app.use(cors({origin: '*'}))
app.use((_req: Request, _res: Response, next: NextFunction) => setTimeout(next, 2000))

app.get('/', (_req: Request, res: Response) => {
  res.status(200)
  res.send('Sample API');
});

app.get('/hello', (_req: Request, res: Response) => {
  res.status(200)
  res.send({message: 'Hello World'});
});

app.post('/echo', (req: Request, res: Response) => {
  res.status(200)
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
