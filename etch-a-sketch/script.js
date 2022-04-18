
const parent = document.querySelector('.parent');

function generateCanvas(n) {
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'canvas-container';
    parent.appendChild(canvasContainer)
    let m = n * n
    canvasContainer.style.gridTemplateColumns = n;
    for (let i = 0; i < m; i++) {
        let divElement = document.createElement('div');
        // divElement.classList.add(".grid-item");
        canvasContainer.appendChild(divElement).className = 'grid-item';
    }
};

function resetGrid() {
    do {
        selection = prompt("Please enter the grid sie (max is 100).");
    
    } while (isNaN(selection) || selection > 100 || selection < 1);
    const canvasContainer = document.querySelector('.canvas-container')
    canvasContainer.remove();
    generateCanvas(selection)
}

generateCanvas(16);
let globalMode = "black";
let canvasItems = document.querySelectorAll('.grid-item');

// Hover effect
canvasItems.forEach((canvasItem) => {
canvasItem.addEventListener("mouseenter", function(event) {
    console.log(event.target)
    if (globalMode === "rainbow") {
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        event.target.style.backgroundColor = globalMode;
    }
    
  }, false);
});

// Black mode
let blackBtn = document.querySelector('#black-mode');
blackBtn.addEventListener('click', function() {
    globalMode = "black";
});

// Eraser mode
let eraserBtn = document.querySelector('#eraser-mode');
eraserBtn.addEventListener('click', () => {
    globalMode = "white";
});

// Color mode
let colorBtn = document.querySelector('#color-mode');
colorBtn.addEventListener('click', (e) => {
    let colorPicker = document.querySelector('#html5colorpicker');
    globalMode = colorPicker.value;
});

//Rainbow mode
let rainbowBtn = document.querySelector('#rainbow-mode');
rainbowBtn.addEventListener('click', () => {
    globalMode = "rainbow";
});

// Clear mode
let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', resetGrid)
// let gridSize = prompt("Please enter the grid sie (max is 100)."
// .canvas-container