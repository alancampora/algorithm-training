// What I did
//var expression1 = '5+16-((9-6)-(4-2))';
//var expression2 = '22+(2-4)';

//let expression = '1+2-3+4-5+6-7';
//let operators = expression.split('').filter(c => c == '+' || c == '-');
//let numbers = expression.split(/\+|\-/g).map(n => parseInt(n));

//let result = operators.reduce((acum, operator, index) => {
//if (index === 0) {
//if (operator === '+') {
//acum += numbers[index] + numbers[index + 1];
//} else {
//acum += numbers[index] - numbers[index + 1];
//}
//} else {
//if (operator === '+') {
//acum += numbers[index + 1];
//} else {
//acum -= numbers[index + 1];
//}
//}

//return acum;
//}, 0);
//console.log('result', result);

// ------------ This is better ------------

const expression = '1+2-3+4-5+6-7';

const isOperator = c => c == '+' || c == '-';

const toInt = base => number => parseInt(number, base);

function stringOperation(expression) {
    let operators = expression.split('').filter(isOperator),
        numbers = expression.split(/\+|\-/g).map(toInt(10));

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

    return result;
}

console.log('the result is:', stringOperation(expression));
