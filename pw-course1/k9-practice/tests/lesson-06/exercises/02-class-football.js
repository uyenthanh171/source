var Team = /** @class */ (function () {
    function Team(name, players) {
        if (players === void 0) { players = []; }
        this.name = name;
        this.players = players;
    }
    Team.prototype.addPlayer = function (newPlayer) {
        this.players.push(newPlayer);
    };
    Team.prototype.listPlayers = function () {
        console.log("Team: ".concat(this.name));
        console.log(this.players.join(", "));
    };
    return Team;
}());
var newTeam = new Team("Đội bóng 1");
newTeam.addPlayer("Nguyễn Văn A");
newTeam.addPlayer("Nguyễn Văn B");
newTeam.addPlayer("Nguyễn Văn C");
newTeam.listPlayers();
