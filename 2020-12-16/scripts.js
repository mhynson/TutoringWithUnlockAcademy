var a = 0;  // Globally Scoped Variable - Single line comment

/*
    This is a globally scoped Function called add.
*/

console.log({ a });

function add(number1, number2) {
    var sum = number1 + number2;
    return sum;
}

/*
    This is a globally scoped Function called subtract.
*/
function subtract(numberToSubtract1, numberToSubtract2) {
    var difference = numberToSubtract1 - numberToSubtract2;
    return difference;
}

var firstSum = add(8, 9);
var firstDifference = subtract(100, 90);

console.log({ a });

console.log("Our first sum is equal to " + firstSum);
console.log("Our first difference is equal to " + firstDifference);

var secondSum = add(420, 23902);

var mathElement = document.getElementById('math');
mathElement.innerText = "The sum of " + 420 + " and " + 23902 + " is equal to " + secondSum;
