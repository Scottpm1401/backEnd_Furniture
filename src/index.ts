import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';
import testRouter from './routes/user';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();
config();

/** Connect to Mongo */
mongoose
  .connect(process.env.MONGO_DB || '', { retryWrites: true, w: 'majority' })
  .then(() => {
    Logging.info('Mongo connected successfully.');
    StartServer();
  })
  .catch((error) => Logging.error(error));

/** Only Start Server if Mongoose Connects */
const StartServer = () => {
  /** Log the request */
  app.use((req, res, next) => {
    /** Log the req */
    Logging.info(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on('finish', () => {
      /** Log the res */
      Logging.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.set('trust proxy', 1);

  /** Rules of our API */
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET'
      );
      return res.status(200).json({});
    }

    next();
  });

  /** Routes */
  app.use('/user', testRouter);

  /** Healthcheck */
  app.get('/ping', (req, res, next) =>
    res.status(200).json({ messsage: 'pong' })
  );

  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error('Not found');

    Logging.error(error);

    res.status(404).json({
      message: error.message,
    });
  });

  http
    .createServer(app)
    .listen(process.env.BE_PORT, () =>
      Logging.info(`Server is running on port ${process.env.BE_PORT}`)
    );
};
