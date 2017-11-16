import * as express from 'express';
import { Characters } from './characters';
import * as mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import Game = require("./gameModel");
import * as bodyParser from 'body-parser';
import { GameLogic } from './game/gameLogic'


var game = new Game({gameid: 2,	players: [{name: 'Heida', role: 'wolf'},{name: 'Halli', role: 'king'}]});
game.save();
console.log(game)


// Creates and configures an ExpressJS web server.
class App {
  gameLogic : GameLogic = new GameLogic();
  currentGame : any;
  // ref to Express instance
  public express: express.Application;
  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    
  }
  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json()); // support json encoded bodies
    this.express.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  }


  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    router.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    // placeholder route handler
    router.get('/', (req, res, next) => {
      let chars: Characters= new Characters();
      res.send(chars.getMembers());
    });
    router.post('/game', (req, res, next) => {
      console.log(req.body.nickname);
      this.currentGame = this.gameLogic.generateRoomNumber(req.body.nickname);
      res.send(this.currentGame);
    });
    router.post('/game/join', (req, res, next) => {
      console.log(req.body.nickname);
      console.log(req.body.gameid);
      this.currentGame = this.gameLogic.joinGame(req.body.nickname, this.currentGame);
      res.send(this.currentGame);
    })
    this.express.use('/', router);
  }
}
export default new App().express;