interface IPlayer {
	gameid: number;
	name: string;
	player: {
        name: string;
        role: string;
    } 
};

export = IPlayer;