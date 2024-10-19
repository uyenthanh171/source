class team {
    name: string;
    players: string[];

    constructor(name: string, players: string[] = []) {
        this.name = name;
        this.players = players;
    }

    addPlayers(addname: string) {
        this.players.push(addname);
    }
    listplayers() {
        console.log(`This team: ${this.name}`);
        console.log(this.players.join(","));
    }
}
const newteam = new team("MU");
newteam.addPlayers("A");
newteam.addPlayers("B");
console.log(newteam);



