import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5001; // Change 5000 to a different port, e.g., 5001

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);


// Sync Sequelize models and then start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.error('Unable to connect to the database:', err));
