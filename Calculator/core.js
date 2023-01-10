function main() {
    const name = 'Aashish';
    var x = 5;
    const y = 7;
    const game = ['Cricket', 'Football', 'Badminton', 'Basketball']
    const Favgame = 'Cricket'
    while (x > 0) {
        console.log(`Name : ${name}; count : ${x}`);
        x = x - 1;
    }
    for (let i = 0; i < y; i++) {
        console.log(i);
    }
    for (i in game) {
        console.log(game[i]);
    }
    for (let i = 0; i < game.length; i++) {
        if (game[i] == Favgame) {
            console.log(`Favorite game(${game[i]}) is included`);
        }
    }
    var x = parseInt(Math.random() * (4));
    var gameIs;
    switch (x) {
        case 0:
            gameIs = game[0];
            break;
        case 1:
            gameIs = game[1];
            break;
        case 2:
            gameIs = game[2];
            break;
        case 3:
            gameIs = game[3];
            break;
        default:
            break;
    }
    console.log(`Game is : ${gameIs}`);

}

main();