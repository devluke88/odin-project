const Player = (name, mark) => {
    return {name, mark};
}

const gameBoard = (function () {
    let gameboard = [];
    let running = 1;
    let notUsedFields = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    let opponentTurn = false;

    const selectField = function (value, player, enemy) {
        disableEnableClick(running);
        running++
        let field = null;
        opponentTurn = false;
        if (typeof value != 'string' && typeof value != "number") {
            field = value.target.dataset.index;   
        }
        else {
            field = value;
        }
        if (gameboard.length > 0) {
            for (let obj of gameboard) {
                if (obj["num"] == field) {
                    disableEnableClick(running);
                    running++;
                    return displayController.updateBoardText("Field already used, please select a new one that has not been used...");
                }
            };
        };

        let playerMark = player.mark;
        var choice = {
            num: field,
            mark: playerMark
        };
        gameboard.push(choice);
        notUsedFields.splice(notUsedFields.indexOf(choice.num), 1);
        displayController.updateTile(field, playerMark);
        if (gameboard.length != 9) {
            opponentTurn = true;
        }
        isGameOver(board);
        displayController.updateBoardText(`Player ${enemy.name}'s turn.`)
    };

    const enemyField = function () {
        if (notUsedFields.length > 1) {
            return notUsedFields[Math.floor(Math.random()*notUsedFields.length)];
        }
        else {
            return notUsedFields[0];
        }
        
    };

    const roundMove = function (e, player1, player2) {
        selectField(e, player1, player2);
        if (opponentTurn) {
            setTimeout(function(){
                selectField(enemyField(), player2, player1);
            }, 1000); 
        }; 
    };

    const isGameOver = function (board) {
        for (let lista of board) {
            let result = "";
            for (let element of lista) {
                let tile = document.querySelector(`[data-index='${element}']`);
                result += tile.innerHTML;   
            };
            if (result === "XXX") {
                // winner is human
                displayController.announceWinner("Human");
                break;
            }
            else if (result === "OOO") {
                displayController.announceWinner("Computer");
                break;
            }
        };
    }

    let disableEnableClick = function (value) {
        // disable the button
        let btnTiles = document.querySelectorAll(".tile");
        btnTiles.forEach(btnTile => {
            if (value % 2 !== 0) {
                btnTile.classList.add("btn-disable");
            }
            else if (value % 2 === 0) {
                btnTile.classList.remove("btn-disable");
            }
        });
    }

    return {gameboard, roundMove};
})();

let displayController = (function () {
    
    // Update the game display
    const updateBoardText = function (text) {
        let boardText = document.querySelector('.game-display');
        boardText.innerHTML = text;
    };

    //Update field selected by the player
    let updateTile = function (tileNumber, tileValue) {
        let tileToUpdate = document.querySelector(`[data-index='${tileNumber}']`);
        tileToUpdate.innerHTML = tileValue;
    };

    // Open Modal and announce winner
    let announceWinner = function(winner) {
        const modal = document.querySelector(".modal");
        openModal(modal);
        let modalField = document.querySelector(".modal-header");
        modalField.innerHTML = `The Winner is: ${winner}`;
    }

    // Open Form to Add the Book
    function openModal(modal) {
        modal.style.display = "block";
    };

    // Reload page, restart game
    function reloadPage() {
        window.location.reload();
    };

    return {updateBoardText, updateTile, announceWinner, reloadPage}
})();

const human = Player("Human", "X");
const ai = Player("AI", "O");
let tileBtns = document.querySelectorAll(".tile");
tileBtns.forEach(tileBtn => {
    tileBtn.addEventListener("click", function(e){
        gameBoard.roundMove(e, human, ai);
    });
});

const restartBtn = document.querySelector(".btn-restart");
restartBtn.addEventListener("click", displayController.reloadPage);
