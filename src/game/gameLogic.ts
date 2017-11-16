// import { game } from '../gameModel'
import Game = require("../gameModel");

export class GameLogic {
    
    public generateRoomNumber(narratorNick: string) : any {
        let gameId : string = this.makeid();
        console.log(gameId);
        
        let game = new Game({gameid: gameId, players: [{name: narratorNick, role: 'Narrator'}]});
        console.log(game);
        return game;
    }

    public makeid(): string {
        var id = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 4; i++)
            id += possible.charAt(Math.floor(Math.random() * possible.length));

        return id;
    }

    public joinGame(nickname: string, game: any) {
        game.players.push({name: nickname, role: 'NotSet'})

        return game;
    }
}