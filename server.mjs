import express from 'express';
import apiRoutes from './routes/api/index.mjs';
import connection from './config/connection.mjs';

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Middleware for URL encoded data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Connection listener
connection.on('connect', () => {
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
});
