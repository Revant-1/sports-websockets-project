import 'dotenv/config';
import express from 'express';
import { matchRouter } from './routes/matches.js';
import { securityMiddleware } from './arcjet.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(securityMiddleware());

app.use('/matches', matchRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Server is up and running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
