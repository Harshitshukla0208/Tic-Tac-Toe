let currentPlayer = 'X';
let gameState = ['','','','','','','','',''];
let winner = document.getElementById('winner');
let WinnerDeclared = false;
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//handling click
function handleClick(){
    let td = event.target;
    console.log(td);
    let index = td.getAttribute('index');
    //check if empty then only player can insert value
    if(td.innerHTML == ''){
        td.innerHTML = currentPlayer;
        gameState[index] = currentPlayer;
        // check for winner
        checkwinner();
        checkDraw();
        changePlayer();
    }
}

function changePlayer(){
    currentPlayer = currentPlayer == 'X' ? 'O':'X';
}

//check for winner
function checkwinner(){
    for(let i = 0 ; i < 8 ; i++){
        var a = winConditions[i][0];
        var b = winConditions[i][1];
        var c = winConditions[i][2];
        if(gameState[a] == currentPlayer &&
            gameState[b] == currentPlayer &&
            gameState[c] == currentPlayer){
                WinnerDeclared = true;
                winner.innerHTML = "Winner is"+currentPlayer;
            }
    }
}
//check for draw

function checkDraw(){
    if(!gameState.includes('')&& WinnerDeclared == false){
        winner.innerHTML = 'Game is Tied'
    }
}



function init(){
    var tdCells = document.getElementsByTagName('td');
    console.log(tdCells);
    for(let i = 0; i < 9; i++){
        tdCells[i].addEventListener('click',handleClick);
    }
}
init();