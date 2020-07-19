/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes';


class App {
  public app: express.Application;

  constructor () {
    this.app = express();
    this.config();
  }

  private config (): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('public'));
    this.app.use('/', router);

    // to check server is alive
    this.app.get('/ping', (req, res) => {
      res.json({status: 'pong'});
    });

  }
}


export default new App().app;
