// var expression = "6+9-12";  3

// + -
// 6 9 12

// 6 9
//

// 5 + 16 - ( 3 - 2)
// 5 + 16 - 1
// 21 - 1
// 20

//-
//+       -
//5   16   3   2

//const Node = (value,left,right) => ({
//})

var expression1 = '5+16-((9-6)-(4-2))';
var expression2 = '22+(2-4)';

let expression = '1+2-3+4-5+6-7';
let operators = expression.split('').filter(c => c == '+' || c == '-');
let numbers = expression.split(/\+|\-/g).map(n => parseInt(n));

let result = operators.reduce((acum, operator, index) => {
    if (index === 0) {
        if (operator === '+') {
            acum += numbers[index] + numbers[index + 1];
        } else {
            acum += numbers[index] - numbers[index + 1];
        }
    } else {
        if (operator === '+') {
            acum += numbers[index + 1];
        } else {
            acum -= numbers[index + 1];
        }
    }

    return acum;
}, 0);

console.log('result', result);
