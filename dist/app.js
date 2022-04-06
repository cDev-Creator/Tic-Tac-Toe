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
    let winner;

    gameText.textContent = 'Place anywhere to start!';
    cell.forEach(item => {
        item.addEventListener('click', e => {
            if(player1.turn == true && e.target.textContent == '' ) {
                e.target.textContent = player1.symbol;
                player1Choices.push(e.target.id)

                console.log(player1Choices);
                test();

                function test() {
                    for(let i = 0; i < winningCombos.length; i++) {
                        let checker = (arr, target) => target.every(v => arr.includes(v));
                        if(checker(player1Choices, winningCombos[i])){
                            console.log("True") 
                            winner = player1.name;
                            endGame(winner)
                        }
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

                test();
                
                function test() {
                    // checking if every item in the target is included in the arr
                    // looping through the length of the winningCombos array and checking every nested 
                    // array against the target array (player1Choices)
                    // it will tell when there is a matching array

                    for(let i = 0; i < winningCombos.length; i++) {
                        let checker = (arr, target) => target.every(v => arr.includes(v));
                        if(checker(player2Choices, winningCombos[i])){
                            console.log("True") 
                            winner = player2.name;
                            endGame(winner);
                        }
                    }   
                }

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


function endGame(winner) {
    console.log(`${winner} won the game`);


}
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
