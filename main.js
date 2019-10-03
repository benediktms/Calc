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
    one: document.getElementById('one'),
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
    firstOperator: 0,
    secondOperator: 0,
};

function testResponse (event) {
    let x = event.target;
    document.getElementById('display-two').textContent = x;
    console.log(x);
}

function f() {
    document.addEventListener('click', function() {
        testResponse();
    })
}