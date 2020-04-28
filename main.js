"use strict";

const calcObj = {
    numbers: [],
    operators: [],

    outputQueue: [],
    operatorStack: [],

    displayTwo: [],

    getDisplay: function() {
        return document.getElementById('display');
    },
    updateDisplay: function (value) {
        calcObj.getDisplay().textContent += value;
    },
    clearDisplay: function (result) {
       calcObj.getDisplay().textContent = result;
    }
};

calcObj.clearDisplay();
//listening for number press
document.querySelectorAll('.btn').forEach(number => calcObj.numbers.push(number));
// listening for operator press
document.querySelectorAll('.operator').forEach(operator => calcObj.operators.push(operator));
// updating display to display numbers pressed
calcObj.numbers.forEach(button => button.addEventListener('click', function () {
    calcObj.updateDisplay(button.textContent);
}));
// updating display for operators pressed
calcObj.operators.forEach(button => button.addEventListener('click', function () {
    calcObj.updateDisplay(button.textContent);
}));
// listening for del press and updating display to remove last character entered
document.getElementById('del').addEventListener('click', function () {
    calcObj.getDisplay().textContent = calcObj.getDisplay().textContent.slice(0, -1);
});
// listening for all clear, and resetting display on click
document.getElementById('AC').addEventListener('click', function () {
    calcObj.clearDisplay();
});
// listening for equals press, implementing logic to display result
document.getElementById('equals').addEventListener('click', function () {

    // look for operators in display
    let equation = document.getElementById('display').textContent.match(/[^\d()]+|[\d.]+/g);
    for (const element of equation) {
        if (element === "+" || element === "-" || element === "*" || element === "/") {
            // push operators in to operator array
            calcObj.operatorStack.push(element);
        } else {
            // push numbers into output queue
            calcObj.outputQueue.push(element);
        }
    }
    //snapshot operator array length
    const stackLength = calcObj.operatorStack.length;
    //implement snapshot, to stop i from becoming larger than the array length
    for (let i = 0; i < stackLength; i++) {
        calcObj.outputQueue.push(calcObj.operatorStack.pop());
    }
    // logic for arithmetic, gets called in shunting yard algorithm
    function calculate(number1, number2, operator) {
        if (operator === "+") {
            return number1 + number2;
        } else if (operator === "-") {
            return number1 - number2;
        } else if (operator === "*") {
            return number1 * number2;
        } else if (operator === "/") {
            return number1 / number2;
        } else {
            throw "ERROR!!!!!"
        }
    }
    //implementation of shunting yard algorithm / reverse polish notation
    for (let i = 0; i < calcObj.outputQueue.length; i++) {
        let element = calcObj.outputQueue[i];
        if (element === "+" || element === "-" || element === "*" || element === "/") {
            // creating variables for function
            let number1 = parseFloat(calcObj.outputQueue[i-2]);
            let number2 = parseFloat(calcObj.outputQueue[i-1]);
            let result = calculate(number1, number2, element);
            // removing added values and operator from array, adding calculated value back into the array
            calcObj.outputQueue.splice(i-2, 3, result);
            console.log(calcObj.outputQueue);
            // resetting i
            i -= 2;
            // making the output display the result, maintaining the result of the last calculation as an element
            document.getElementById('display').textContent = result;
        }
    }
});
