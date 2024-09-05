import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Initial Typescript project for OpenAgent');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
