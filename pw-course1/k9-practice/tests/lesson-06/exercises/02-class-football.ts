class Team {
    name: string;
    players: string[];

    constructor(name: string, players: string[] = []) {
        this.name = name;
        this.players = players;
    }

    addPlayer(newPlayer: string) {
        this.players.push(newPlayer);
    }

    listPlayers() {
        console.log(`Team: ${this.name}`);
        console.log(this.players.join(", "));
    }
}

const newTeam = new Team("Đội bóng 1");
newTeam.addPlayer("Nguyễn Văn A");
newTeam.addPlayer("Nguyễn Văn B");
newTeam.addPlayer("Nguyễn Văn C");
newTeam.listPlayers();