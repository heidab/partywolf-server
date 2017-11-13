interface IPlayer {
	gameid: number;
	players: [{
        name: string;
        role: string;
    }]
};

export = IPlayer;