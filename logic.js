let a = prompt("Please enter the first number: ");
let b = prompt("Please enter the operator: ");
let c = prompt("Please enter the second number: ");
let num1 = parseInt(a);
let operator = b;
let num2 = parseInt(c);

//Function to do operation depending on operator

function operate(num1, num2, operator){
    let result;

    switch (operator) {
        case '+':
            result = sum(num1, num2);
            break;
        case '-':
            result = res(num1, num2);
            break;
        case '/':
            result = div(num1, num2);
            break;
        case '*':
            result = mul(num1, num2);
            break;
        default:
            alert("Error, no operator entered or operator is not valid");
    }
    return result;
}

console.log(operate(num1, num2, operator));

//Functions for operations

function sum(num1, num2){
    return num1 + num2;
}
 
function res(num1, num2){
     return num1 - num2;
}
 
function mul(num1, num2){
     return num1 * num2;
}
 
function div(num1, num2){
     if(num2 == 0){
         alert("You cannot divide by zero!");
     } else {
         return num1 / num2;
     }
     
}