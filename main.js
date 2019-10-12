"use strict";

const calcObj = {
    numbers: [],
    operators: [],

    outputQueue: [],
    operatorStack: [],

    getDisplay: function() {
        return document.getElementById('display');
    },
    updateDisplay: function (value) {
        calcObj.getDisplay().textContent += value;
    },
    clearDisplay: function () {
       calcObj.getDisplay().textContent = '';
    }
};

calcObj.clearDisplay();

document.querySelectorAll('.btn').forEach(number => calcObj.numbers.push(number));
document.querySelectorAll('.operator').forEach(operator => calcObj.operators.push(operator));

calcObj.numbers.forEach(button => button.addEventListener('click', function () {
    calcObj.updateDisplay(button.textContent);
}));

calcObj.operators.forEach(button => button.addEventListener('click', function () {
    calcObj.updateDisplay(button.textContent);
}));

document.getElementById('del').addEventListener('click', function () {
    calcObj.getDisplay().textContent = calcObj.getDisplay().textContent.slice(0, -1);
});

document.getElementById('AC').addEventListener('click', function () {
    calcObj.clearDisplay();
});

document.getElementById('equals').addEventListener('click', function () {
    //console.log(document.getElementById('display').textContent.match(/[^\d()]+|[\d.]+/g));
    let equation = document.getElementById('display').textContent.match(/[^\d()]+|[\d.]+/g);
    for (const element of equation) {
        if (element === "+" || element === "-" || element === "*" || element === "/") {
            calcObj.operatorStack.push(element);
        } else {
            calcObj.outputQueue.push(element);
        }
    }
    //console.log(calcObj.operatorStack);
    //console.log(calcObj.outputQueue);
    const stackLength = calcObj.operatorStack.length;

    for (let i = 0; i < stackLength; i++) {
        calcObj.outputQueue.push(calcObj.operatorStack.pop());
    }
    //console.log(calcObj.outputQueue);

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
    console.log(calcObj.outputQueue);
    for (let i = 0; i < calcObj.outputQueue.length; i++) {
        let element = calcObj.outputQueue[i];
        console.log(i);
        if (element === "+" || element === "-" || element === "*" || element === "/") {
            let number1 = parseFloat(calcObj.outputQueue[i-2]);
            let number2 = parseFloat(calcObj.outputQueue[i-1]);
            let result = calculate(number1, number2, element);
            calcObj.outputQueue.splice(i-2, 3, result);
            console.log(calcObj.outputQueue);
            i -= 2;
        }
    }
    document.getElementById('display-two').textContent
    document.getElementById('display').textContent = calcObj.outputQueue[0];
});