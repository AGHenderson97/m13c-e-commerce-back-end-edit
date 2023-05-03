import pool from './db.mjs';
import express from 'express';
import routes from './routes/index.mjs';
import sequelize from './config/connection.mjs';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
