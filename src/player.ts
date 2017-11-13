import * as mongoose from 'mongoose';
import IPlayer = require('./interfaces/IPlayer');
interface IPlayerModel extends IPlayer, mongoose.Document { }


var userSchema = new mongoose.Schema({
    gameid: Number,
	name: String,
	player: {
        name: String,
        role: String
    }
});

var User = mongoose.model<IPlayerModel>("User", userSchema);
export = User;
