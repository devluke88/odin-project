
const parent = document.querySelector(".parent");
const DEFAULT = 16;

function generateCanvas(n) {
    const canvasContainer = document.querySelector(".canvas-container")
    canvasContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    canvasContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    parent.appendChild(canvasContainer);
    let boxSize = `${500/n}px`;
    for (let i = 0; i < n*n; i++) {
        let divElement = document.createElement('div');
        divElement.style.height = boxSize;
        divElement.style.width = boxSize;
        divElement.addEventListener("mouseenter", function(event) {
            console.log(event.target)
            if (globalMode === "rainbow") {
                event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            else {
                event.target.style.backgroundColor = globalMode;
            }
        }, false);
        canvasContainer.appendChild(divElement).className = "grid-item";
    }
};

function resetGrid() {
    do {
        selection = prompt("Please enter the grid sie (max is 100).");
    
    } while (isNaN(selection) || selection > 100 || selection < 1);
    const canvasContainer = document.querySelector(".canvas-container")
    while (canvasContainer.firstChild) {
        canvasContainer.removeChild(canvasContainer.lastChild)
    }
    generateCanvas(parseInt(selection));
    let canvasItems = document.querySelectorAll(".grid-item");
    return canvasItems;
}

generateCanvas(DEFAULT);
let globalMode = "black";

// Black mode
let blackBtn = document.querySelector('#black-mode');
blackBtn.addEventListener("click", function() {
    globalMode = "black";
});

// Eraser mode
let eraserBtn = document.querySelector('#eraser-mode');
eraserBtn.addEventListener("click", () => {
    globalMode = "white";
});

// Color mode
let colorBtn = document.querySelector("#color-mode");
colorBtn.addEventListener("click", (e) => {
    let colorPicker = document.querySelector("#html5colorpicker");
    globalMode = colorPicker.value;
});

//Rainbow mode
let rainbowBtn = document.querySelector("#rainbow-mode");
rainbowBtn.addEventListener("click", () => {
    globalMode = "rainbow";
});

// Clear mode
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", resetGrid)
