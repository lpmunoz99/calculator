let num1 = parseInt(prompt("Primer numero"));
let num2 = parseInt(prompt("Segundo numero"));
let operator = parseInt(prompt("Operacion a realizar"));


function add(n1, n2){
    return n1 + n2;
}

function substract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function operate(n1, n2, op){
    switch (op){
        case 1: 
            return add(n1, n2);
            break;
        case 2:
            return substract(n1,n2);
            break;
        case 3:
            return multiply(n1, n2);
            break;
        case 4:
            return divide(n1, n2);
            break;
        default:
            alert("Select a valid option");
    }
}



const result = operate(num1, num2, operator);

console.log(result);