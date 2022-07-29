import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line import/extensions
import indexRoutes from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));

app.listen(5000);
console.log('Starting server on the port ', 5000);
