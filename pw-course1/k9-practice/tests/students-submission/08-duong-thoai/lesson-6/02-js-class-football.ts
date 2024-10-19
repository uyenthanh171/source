// // Cách Thoại làm
export class team {
    name: string;
    player: {
        namePlayer: string,
        number: number
    }[];

    constructor(name: string, player: { namePlayer: string, number: number }[]) {
        this.name = name;
        this.player = player;
    }

    addPlayer(namePlayer: string, number: number){
        this.player.push({namePlayer, number})
    }

    listPlayers(){
        return this.player.map(CauThu => `Tên: ${CauThu.namePlayer} Số: ${CauThu.number}`);
    }
}

let player = [
    { namePlayer: "Nguyễn", number: 10 },
    { namePlayer: "Toàn", number: 7 }
]



const VietNam = new team("Đội Việt Nam", player);

console.log(VietNam);
console.log(VietNam.listPlayers());

// Sửa bài

export class team1 {
    name: string;
    player: string[];

    constructor(name: string, player: string [] = []){
        this.name = name;
        this.player = player;
    }

    addPlayer(namePlayer: string){
        this.player.push(namePlayer);
        console.log(this.player);
    }

    listPlayer(){
        console.log(`Đội: ${this.name}`);
        console.log(this.player.join(", "));
    }
}
const newTeam = new team1("Sóc Trăng");
newTeam.addPlayer("Nguyen Van A");
newTeam.addPlayer("Nguyen Van B");
newTeam.addPlayer("Nguyen Van C");
newTeam.listPlayer();