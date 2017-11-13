import * as mongoose from 'mongoose';
import IPlayer = require('./interfaces/IPlayer');
interface IPlayerModel extends IPlayer, mongoose.Document { }


var gameSchema = new mongoose.Schema({
    gameid: Number,
	players: [{
        name: String,
        role: String
    }]
});

var Game = mongoose.model<IPlayerModel>("Game", gameSchema);
export = Game;