import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import testRouter from './routes/user/index';
import { db } from './database';
import { config } from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);
db();
app.use('/users', testRouter);

app.listen(process.env.BE_PORT, () => {
  console.log(`server started on port ${process.env.BE_PORT}`);
});
