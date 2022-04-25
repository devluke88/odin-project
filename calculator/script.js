function add(n, m) {
	return n + m;
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
    if (operator === "+") {
        return add(n, m);
    }
    else if (operator === "-") {
        return subtract(n, m);
    }
    else if (operator === "*") {
        return multiply(n, m);
    }
    else if (operator === "/") {
        return devide(n, m);
    }

};


// TODO-2: function operate - take operator and call the right function

// TODO-3: buttons for each digit, each functions and equals, clear button

// TODO-4: function that populates the display when you click the number buttons, store display value in a var

// TODO-5: 