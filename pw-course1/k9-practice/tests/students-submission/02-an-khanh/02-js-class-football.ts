export class Team {
    name: string;
    players: string[];

    constructor(name: string, players: string[] = []) {
        this.players = players
        this.name = name;
    }

    addPlayer(player: string) {
        this.players.push(player);
    }

    listPlayers() {
        let list: string = `${this.name} has ${this.players.join(', ')}`;
        return list;
    }

}

const ATeam = new Team("Team A", ["Player A", "Player B", "Player C", "Player D"]);
console.log(ATeam.listPlayers());

ATeam.addPlayer("Player E");
console.log(ATeam.listPlayers());
