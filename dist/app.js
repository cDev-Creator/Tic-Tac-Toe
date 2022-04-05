const player = (name, symbol, turn) => {
    return { name, symbol, turn };
};

const player1 = player("nat", "X", true);
const player2 = player("theo", "O", false);
let isWon = false;

const playerTurn = (function(){
    let turns = 0;
    const cell = document.querySelectorAll('.cell')
    const gameText = document.querySelector('.game-text')

    const player1Choices = [];
    const player2Choices = [];

    gameText.textContent = 'Place anywhere to start!';
    cell.forEach(item => {
        item.addEventListener('click', e => {
            if(player1.turn == true && e.target.textContent == '' ) {
                e.target.textContent = player1.symbol;
                player1Choices.push(e.target.id)
               
             /*    if(player1Choices.includes('0') && player1Choices.includes('1') 
                && player1Choices.includes('2')) {
                    gameText.textContent = `${player1.name} wins`;
                    console.log(`${player1.name} IS THE WINNER`)
                }  */

                console.log(player1Choices);
                rat();

                function rat() {
                    const containsA = winningCombos.some(e => JSON.stringify(e) == JSON.stringify(player1Choices))
                    console.log(containsA);

                    for (let i = 0; i < winningCombos.length; i++) {
                        /* if(player1Choices.includes(winningCombos[i])) { */
                        console.log(winningCombos[i]);
                    }
                }
               
                gameText.textContent = `${player2.name}'s turn`;
                player1.turn = false;
                player2.turn = true;
                turns++;
            }

            else if(player2.turn == true && e.target.textContent == '') {
                e.target.textContent = player2.symbol;
                player2Choices.push(e.target.id)

                gameText.textContent = `${player1.name}'s turn`;
                player1.turn = true;
                player2.turn = false;
                turns++;
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
    ['0', '1' ,'2'],
    ['0', '3' ,'6'],
    ['0', '4' ,'8'],
    ['1' ,'4' ,'7'],
    ['2', '5', '8'],
    ['2', '4', '6'],
    ['3', '4', '5'],
    ['6', '7', '8']
];
