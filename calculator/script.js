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
        return devide(parseFloat(n), parseFloat(m));
    }
};

//Function to update Display
function populateDisplay(e) {
    let clickedValue = e.target.innerHTML;
    if (displayValue == "0") {
        if (clickedValue == ".") {
            displayScreen.innerHTML = 0;
            displayScreen.innerHTML += clickedValue;
        }
        else {
            displayScreen.innerHTML = clickedValue;
        }  
        displayValue = displayScreen.innerHTML;
    }
    else {
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
    operatorValue = null;
    displayValue = 0;
    notClickedOnce = true;
    operatorBlocked = false;
    lista = [0];
}

//Function to delete digit from display
function deleteDigitFromDisplay() {
    let display = displayScreen.innerHTML;
    let newDisplay = display.slice(0, display.length-1);
    displayScreen.innerHTML = newDisplay;
};

//Function to process selected number and update display
function selectNumberAndUpdateDisplay(e) {
    operatorBlocked == false;
    if (displayScreen.innerHTML.length < 7) {
        populateDisplay(e);
    }
};

//Function to make calculation and update the display after operator sign was clicked
function updateDisplayAfterOperator(e) {
    let savedValue = e.target.innerHTML;
    if (operatorBlocked == true) {
        operatorValue = savedValue;
    }
    else {
        if (notClickedOnce == true) {
            operatorValue = savedValue;
            lista.push(displayScreen.innerHTML);
            firstNum = displayScreen.innerHTML;
            displayValue = 0;
            notClickedOnce = false;
            operatorBlocked == true;
        }
        else {
            lista.push(displayScreen.innerHTML);
            let equalsOperation = operate(operatorValue, lista[lista.length-2], lista[lista.length-1]);
            equalsOperation =  Math.round(equalsOperation * 1000000) / 1000000;
            let partialResult = `${equalsOperation}`.slice(0, 7);
            if (partialResult == "NaN") {
                partialResult = 0;
            }
            else if (partialResult == "Infinit") {
                partialResult = 0;
                alert("You cannot devide by zero!");
            }
            e = generateEventPayload(partialResult);
            displayValue = 0;
            populateDisplay(e); 
            displayValue = 0;
            notClickedOnce = false;
            lista.push(displayScreen.innerHTML);
            operatorBlocked == true;
        }
        operatorValue = savedValue; 
    }
};

//Function to sum operation
function sumOperation(e) {
    secondNum = displayScreen.innerHTML;
    lista.push(displayScreen.innerHTML);
    let equalsOperation = operate(operatorValue, lista[lista.length-2], lista[lista.length-1]);
    equalsOperation =  Math.round(equalsOperation * 1000000) / 1000000;
    let partialResult = `${equalsOperation}`.slice(0, 7);
    if (partialResult == "NaN") {
        partialResult = 0;
    }
    else if (partialResult == "Infinit") {
        partialResult = 0;
        alert("You cannot devide by zero!");
    }
    e = generateEventPayload(partialResult);
    displayValue = 0;
    populateDisplay(e);   
    displayValue = 0;
    notClickedOnce = true;
};

//Function allowing keyboard support
function handleKeyboardSupport(e) {
    if (e.key >= "0" && e.key <= "9") {
        e = generateEventPayload(e.key);
        selectNumberAndUpdateDisplay(e);
    }
    else if (e.key == ".") {
        e = generateEventPayload(e.key);
        populateDisplay(e);
    }
    else if (e.key == "Backspace") {
        deleteDigitFromDisplay();
    }
    else if (e.key == "Enter" || e.key == "=") {
        e = generateEventPayload(e.key);
        sumOperation(e);
    }
    else if (e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*") {
        if (e.key == "*") {
            e.key = "x";
        };
        e = generateEventPayload(e.key);
        updateDisplayAfterOperator(e);
    }
};

// Function supporting event payload creation
function generateEventPayload(value) {
    e = {
        "target": {
            "innerHTML": value
        }
    }
    return e;
};

// Inistial values
let operatorValue = null;
let displayValue = 0;
let notClickedOnce = true;
let operatorBlocked = false;
let lista = [0]
let displayScreen = document.querySelector(".white");
displayScreen.innerHTML = 0;

// Numbers Buttons
let numberBtns = document.querySelectorAll('.item-number-btn');
numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", selectNumberAndUpdateDisplay)});

//Operation Buttons
let operateBtns = document.querySelectorAll('.item-operate-btn');
operateBtns.forEach(operateBtn => {
    operateBtn.addEventListener("click", updateDisplayAfterOperator)});

// Equals Button
let equalsBtn = document.querySelector(".item-equals-btn");
equalsBtn.addEventListener("click", sumOperation);

// Clear Button
let clearBtn = document.querySelector('.item-clear');
clearBtn.addEventListener('click', clearEverything);

// Decimal Button
let dotBtn = document.querySelector('.item-dot-btn');
dotBtn.addEventListener('click', populateDisplay);

// Delete Button
let deleteBtn = document.querySelector('.item-delete');
deleteBtn.addEventListener('click', deleteDigitFromDisplay);

//Keyboard support
window.addEventListener('keydown', handleKeyboardSupport);