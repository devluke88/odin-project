const Player = (name) => {
    const sayHello = () => console.log(`Hi, ${name}.`);
    return {name, sayHello};
}

let gameBoard = (function () {
    let gameboard = [];
    return {gameboard};
})();

let displayController = (function () {

})();

//gameBoard, displayController

const andrew = Player("Andrew");
const ai = Player("AI");
// (function gameBoard() {
//     gameboard = ["Thomas"],
    
//     return setName;
// })();


//Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)