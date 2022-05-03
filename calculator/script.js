function add(n, m) {
	return (parseFloat(n) + parseFloat(m));
};

function subtract (n, m) {
	return n - m;
};

function multiply (n, m) {
  return n * m;
};

function devide(n, m) {
    return n / m;
};

function operate(operator, n, m) {
    if (operator == "+") {
        return add(parseFloat(n), parseFloat(m));
    }
    else if (operator == "-") {
        return subtract(parseFloat(n), parseFloat(m));
    }
    else if (operator == "x") {
        return multiply(parseFloat(n), parseFloat(m));
    }
    else if (operator == "/") {
        if (n == 0 || m == 0) {
            return 0;
        }
        return devide(parseFloat(n), parseFloat(m));
    }
};

let operatorValue = null;
let operatorList = ["+", "-", "/", "x"];

let firstNum = 0;
let secondNum = 0;
let displayNum = 0;
let displayValue = 0;

let displayScreen = document.querySelector(".white");
displayScreen.innerHTML = 0;

function populateDisplay(e) {
    let clickedValue = e.target.innerHTML;
    if (displayValue == "0") {
        if (clickedValue == ".") {
            displayScreen.innerHTML = 0;
            displayScreen.innerHTML += clickedValue;
        }
        else {
            console.log("test")
            displayScreen.innerHTML = clickedValue;
        }  
        displayValue = displayScreen.innerHTML;
    }
    else {
        console.log("tescik")
        if (clickedValue == ".") {
            if (displayScreen.innerHTML.includes(".")) {
                console.log("Ignore . symbol")
            }
            else {
                displayScreen.innerHTML += clickedValue;
            }
        }
        else {
            displayScreen.innerHTML += clickedValue;
        } 
    }
};


// Function to clear everything
function clearEverything() {
    displayScreen.innerHTML = 0;
    firstNum = 0;
    secondNum = 0;
    displayValue = 0;
}

// Numbers Buttons
let numberBtns = document.querySelectorAll('.item-number-btn');
numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", populateDisplay);
});

//Operation Buttons
let operateBtns = document.querySelectorAll('.item-operate-btn');
operateBtns.forEach(operateBtn => {
    operateBtn.addEventListener("click", (e) => {
        // if (displayScreen.innerHTML == "0") {
        //     console.log("do nothing")
        // }
        operatorValue = e.target.innerHTML;
        firstNum = displayScreen.innerHTML;
        displayValue = 0;
        console.log(`Operator ${operatorValue} used.`);
    });
});

// Equals Button
let equalsBtn = document.querySelector(".item-equals-btn");
equalsBtn.addEventListener("click", (e) => {
    secondNum = displayScreen.innerHTML;
    let equalsOperation = operate(operatorValue, firstNum, secondNum);
    equalsOperation =  Math.round(equalsOperation * 1000000) / 1000000
    // displayScreen.innerHTML = equalsOperation;
    e = {
        "target": {
            "innerHTML": equalsOperation
        }
    }
    displayValue = 0;
    populateDisplay(e)   
    displayValue = 0;
    // operatorValue = "";
    // firstNum = secondNum; 
});

// Clear Button
let clearBtn = document.querySelector('.item-clear');
clearBtn.addEventListener('click', clearEverything);

let dotBtn = document.querySelector('.item-dot-btn');
dotBtn.addEventListener('click', populateDisplay);