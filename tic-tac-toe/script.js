const Player = (name, mark) => {
    return {name, mark};
}

let gameBoard = (function () {
    let gameboard = [];
    let running = 0;
    let notUsedFields = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let opponentTurn = false;
    const selectField = function (value, player) {
        let field = null;
        opponentTurn = false;
        if (typeof value != 'string' && typeof value != "number") {
            console.log(`Value of target ${value}`)
            field = value.target.dataset.index;   
        }
        else {
            field = value;
        }
        if (gameboard.length > 0) {
            for (let obj of gameboard) {
                console.log(`Object in gameboard: ${obj[0]}`)
                console.log(`Field: ${obj}`)
                if (obj["num"] == field) {
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
        console.log("=========")
        console.log(`Choice is: ${choice.num}, ${choice.mark}`);
        console.log(`Index: ${notUsedFields.indexOf(choice.num)}`)
        notUsedFields.splice(notUsedFields.indexOf(choice.num), 1);
        console.log(`Field not in use: ${notUsedFields}`);
        console.log("=========")
        displayController.updateTile(field, playerMark);
        if (gameboard.length >= 9) {
            displayController.announceWinner("Test");
        }
        opponentTurn = true;
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
        if (gameBoard.running != 1) {
            gameBoard.running = 1;
            selectField(e, player1);
            if (opponentTurn) {
                setTimeout(function(){
                    selectField(enemyField(), player2);
                }, 1000); 
            }; 
            gameBoard.running = 0;
        };
        
    };

    const disableClick = function () {
        //disable the button
        let btnTiles = document.querySelectorAll(".tile");
        btnTiles.forEach(btnTile => {btnTile.disabled = true;
        });
    }

    const enableClick = function () {
        let btnTiles = document.querySelectorAll(".tile");
        btnTiles.forEach(btnTile => {btnTile.disabled = false;
        });
    }

    return {gameboard, roundMove};
})();

let displayController = (function () {
    
    const updateBoardText = function (text) {
        let boardText = document.querySelector('.game-display');
        boardText.innerHTML = text;
    };
    let updateTile = function (tileNumber, tileValue) {
        let tileToUpdate = document.querySelector(`[data-index='${tileNumber}']`);
        console.log(`Tile no: ${tileNumber}`);
        console.log(`Tile val: ${tileValue}`);
        console.log(`Tile to update: ${tileToUpdate}`)
        tileToUpdate.innerHTML = tileValue;
    };
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

// Close Form when adding the Book
    function closeModal(modal) {
        modal.style.display = "none";
    };
    return {updateBoardText, updateTile, announceWinner}
})();

//gameBoard, displayController

const human = Player("Human", "X");
const ai = Player("AI", "O");
let tileBtns = document.querySelectorAll('.tile');
tileBtns.forEach(tileBtn => {
    tileBtn.addEventListener("click", function(e){
        gameBoard.roundMove(e, human, ai);
    });
});
