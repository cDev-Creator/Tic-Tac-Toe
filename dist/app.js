const player = (name, symbol, turn) => {
    return { name, symbol, turn };
};

const player1 = player("nat", "X", true);
const player2 = player("theo", "O", false);

const gameText = document.querySelector('.game-text')

const playerTurn = (function(){
    let turns = 0;
    const cell = document.querySelectorAll('.cell')
  
    gameText.textContent = 'Place anywhere to start!';
    cell.forEach(item => {
        item.addEventListener('click', e => {
            if(player1.turn == true && e.target.textContent == '') {
                e.target.textContent = player1.symbol;

                console.log(e.target.id);

                gameText.textContent = `${player2.name}'s turn`;
                player1.turn = false;
                player2.turn = true;
                turns++;
                console.log(turns)
            }
            else if(player2.turn == true && e.target.textContent == '') {
                e.target.textContent = player2.symbol;

                console.log(e.target.id);

                gameText.textContent = `${player1.name}'s turn`;
                player1.turn = true;
                player2.turn = false;
                turns++;
                console.log(turns)
            }
            else {
                return;
            }

            if(turns === 9) {
                console.log('It is a draw');
                gameText.textContent = 'Its a draw!';
            }
        });
    });
})();


const winningCombos = [
    [0, 1 ,2],
    [0, 3 ,6],
    [0, 4 ,8],
    [1 ,4 ,7],
    [2, 5, 8],
    [2, 4, 6]
    [3, 4, 5],
    [6, 7, 8]
];

const winGame = (function(){
    
  /*   if(player1.symbol === cell) */

    console.log(`${player1.name} wins`);

    console.log(`${player2.name} wins`);
})();