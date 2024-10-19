// Yêu cầu: 
// - Tạo một class team chứa các thuộc tính: name, players (mảng các cầu thủ). - Tạo một phương thức addPlayer để thêm cầu thủ vào đội. 
// - Tạo một phương thức listPlayers để liệt kê tất cả các cầu thủ trong đội. 10 

export class Team {
    name: String;
    players: Player[];

    constructor(name: string, players: Player[]) {
        this.name = name;
        this.players = players;
    };

    //phương thức addPlayer để thêm cầu thủ vào đội
    addPlayer(player: Player) {
        this.players.push(player);
    };

    //phương thức listPlayers để liệt kê tất cả các cầu thủ trong đội
    listPlayers() {
        this.players.forEach(player => {
            console.log(player.name);
        });
    };
};

export class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    };
};

const player1 = new Player("Duyên");
const listPlayers = [player1];
const team = new Team("K9 Class", listPlayers);
team.addPlayer(new Player("Uyên"));
console.log(team);
team.listPlayers();