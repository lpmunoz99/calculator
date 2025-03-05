/*

let a = prompt("Please enter the first number: ");
let b = prompt("Please enter the operator: ");
let c = prompt("Please enter the second number: ");
let num1 = parseInt(a);
let operator = b;
let num2 = parseInt(c);

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

*/

//Global variables
let num1 = "";
let num2 = "";
let operator = "";
let negative = "";
let result = 0;

//DOM for number selection and display population
const numbers = document.querySelectorAll(".btn-number");
const display = document.querySelector("#display");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if(operator === ""){
            if (num1.length <= 6){
                num1 = AddNum1(number.textContent);
                display.textContent = num1;
            }
                
        } else {
            if (num2.length <= 6){
                num2 = AddNum2(number.textContent);
                display.textContent = num1 + operator + num2;
            }
        }
    });
});

//Num1 function
function AddNum1(num){
        return num1 += num;

}

//Num2 function
function AddNum2(num){
    return num2 += num;
}
