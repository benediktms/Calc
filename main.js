"use strict";

/* Pseudo code:
1. when the user presses a button the type of button needs to be recognized:
    - an event listener needs to be implemented for each of the three button classes (btn, dataChange, btn operator)
    -
    - if the button pressed is not DEL or AC then the number needs to be stored in a variable:
        - string: numbers need to be added and removed from the string without any operation taking place
        - array: past results should be displayed in an array to allow the user to see the history. This should go back at least to the previous result
    - these variables should be stored in an object to avoid the global scope.
2. the variable for the current operation should be shown in the display.

 */

const calcObj = {
    // numbers
    one: document.getElementById('one').textContent,
    two: document.getElementById('two'),
    three: document.getElementById('three'),
    four: document.getElementById('four'),
    five: document.getElementById('five'),
    six: document.getElementById('six'),
    seven: document.getElementById('seven'),
    eight: document.getElementById('eight'),
    nine: document.getElementById('nine'),

    // data change
    AC: document.getElementById('AC'),
    equals: document.getElementById('equals'),

    // operators
    minus: document.getElementById('minus'),
    plus: document.getElementById('plus'),
    multiply: document.getElementById('multiply'),
    float: document.getElementById('float'),

    // logic
    calcUI: document.getElementById('grid'),
    pastNumbers: [],
    numbers: [],
};

calcObj.calcUI.addEventListener('click', function (event) {
    const targetBtn = event.target;
    // gets the number that was pressed and adds it to the first operator value
    calcObj.firstOperator = targetBtn.textContent;
    console.log(calcObj.firstOperator);

    switch (targetBtn.id) {
        case 'default':
            calcObj.numbers.prototype.push(targetBtn.textContent);
            console.log(targetBtn.id);
        case 'equals':
            console.log(targetBtn.id);
        case 'AC':
    }
});
