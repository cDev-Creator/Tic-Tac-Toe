const player = (name, symbol, turn) => {
    return { name, symbol, turn };
};

const player1 = player("mushroom", "i ", true);
const player2 = player("moon", "i ", false);
let isWon = false;

const game = (function(){
    let turns = 0;
    let xscore = 0;
    let oscore = 0;

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

    const player1Choices = [];
    const player2Choices = [];
    const gameText = document.querySelector('.game-text');
    const cell = document.querySelectorAll('.cell');
    const clearBtn = document.getElementById('clear');
    gameText.textContent = 'Place anywhere to start!';

    cell.forEach(item => {
        item.addEventListener('click', e => {
            const xscoreDisplay = document.getElementById('xscore');
            const oscoreDisplay = document.getElementById('oscore');

            
            if(player1.turn == true && e.target.textContent == '' && !isWon) {
                e.target.textContent = player1.symbol;
                player1Choices.push(e.target.id)
                item.classList.add('player1');
                item.style.backgroundColor = "#db98c1"

                gameText.textContent = `${player2.name}'s turn`;
                player1.turn = false;
                player2.turn = true;
                turns++;
                gameWinner(player1Choices, player1.name);

                if(isWon) {
                    xscore++;
                    tournamnetWinner(xscore, xscoreDisplay, player1.name);
                } 
            }

            else if(player2.turn == true && e.target.textContent == '' && !isWon) {
            
                e.target.textContent = player2.symbol;
                player2Choices.push(e.target.id)
                item.classList.add('player2');
                item.style.backgroundColor = "#fff8c5"

                gameText.textContent = `${player1.name}'s turn`;
                player1.turn = true;
                player2.turn = false;
                turns++;
                gameWinner(player2Choices, player2.name);

                if(isWon) {
                    oscore++;
                    tournamnetWinner(oscore, oscoreDisplay, player2.name);
                }
            }

            else if(player2.turn == true && e.target.textContent == '' && !isWon) {
            
                e.target.textContent = player2.symbol;
                player2Choices.push(e.target.id)
                gameText.textContent = `${player1.name}'s turn`;
                player1.turn = true;
                player2.turn = false;
                turns++;
                gameWinner(player2Choices, player2.name);

                if(isWon) {
                    oscore++;
                    tournamnetWinner(oscore, oscoreDisplay, player2.name);
                }
            }

            console.log(turns)
            if (turns === 9 && !isWon) {
                gameText.textContent = 'Its a draw!';
                clearBtn.style.display = 'flex';
                clearBoardBtn();
            }

            function tournamnetWinner(score, display, name) {
                display.textContent = `: ${score}`;
                if (score >= 3) {
                    gameText.textContent = `${name} won the game!`; 
                    setTimeout(scoreReset, 2000);
                    setTimeout(clearBoard, 2000);
                    clearBtn.style.display = 'none';
                }
            }

            function scoreReset() {
                xscore = 0;
                oscore = 0;
                xscoreDisplay.textContent = `: ${xscore}`;
                oscoreDisplay.textContent =  `: ${oscore}`;
            }

            function clearBoard() {
                cell.forEach(item => {
                    isWon = false;
                    item.textContent = '';
                    item.classList.remove('player1');
                    item.classList.remove('player2');
                    item.style.backgroundColor = "rgb(215, 236, 255)"
                    player1Choices.splice(0,player1Choices.length)
                    player2Choices.splice(0,player2Choices.length)
                })
            }

            function clearBoardBtn() {
                clearBtn.addEventListener('click', e => {
                    clearBoard();
                    clearBtn.style.display = 'none';
                })
            }

            // checking if every item in the target is included in the arr
            // looping through the length of the winningCombos array and checking every nested 
            // array against the target array (player1Choices)
            // it will tell when there is a matching array
            function gameWinner(player, winner) {  
                for(let i = 0; i < winningCombos.length; i++) {
                    let checker = (arr, target) => target.every(v => arr.includes(v));
                    if(checker(player, winningCombos[i])){
                        isWon = true;
                        clearBtn.style.display = 'flex';
                        gameText.textContent =`${winner} won the round!`;
                        clearBoardBtn();
                    }
                }    
            } 
        });
    });
})();