import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
// When using node16 or nodenext, include the .js extension even it's .ts file.
import contactRoutes from './routes/contactRoutes.js';
import { initializeDatabase } from './database.js';

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

app.use('/api', contactRoutes);

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(console.error);
