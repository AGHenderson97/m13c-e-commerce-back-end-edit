import express from 'express';
import routes from './routes/api/index.mjs';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
