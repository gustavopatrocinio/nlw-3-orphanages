import express from 'express';
import './database/connection';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//criando um endereço para poder acessar as imagens e visualizá-las
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);

