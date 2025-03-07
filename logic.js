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
let dDot = "";
let result = "";

//DOM for clear button
const clear = document.querySelector("#ac");
clear.addEventListener("click", () => {
    display.textContent = "";
    total = "";
    num1 = "";
    num2 = "";
    operator = "";
    negative = "";
});

//DOM for delete button
const dlete = document.querySelector("#delete");
dlete.addEventListener("click", () => {
    let textArray = [...display.textContent];
    textArray.splice(-1);
    let newText = textArray.join("");
    display.textContent = newText;
    if (num1 === ""){
        negative = "";
    }
    else if(num1 != "" && operator === ""){
        num1 = newText;
        negative = "";
    } 
    else if (num1 != "" && operator != "" && num2 === "") {
        if (negative === ""){
            operator = "";
            display.textContent = num1 + operator;
        }else {
            negative = "";
            display.textContent = num1 + operator;
        }
        
    } else if (num1 != "" && operator != "" && num2 != ""){
        if(num2.length <= 1){
            num2 = "";
            display.textContent = num1 + operator;
        }else{
            let temp = [...num2];
            temp.splice(-1);
            let newTemp = temp.join("");
            num2 = newTemp;
            console.log(num2);
        }
    }
    
});

//DOM for number selection and display population
const numbers = document.querySelectorAll(".btn-number");
const display = document.querySelector("#display");
const dot = document.querySelector(".btn-dot");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if(operator === ""){
            if (num1.length <= 6){
                if(negative === ""){
                    num1 = AddNum1(number.textContent);
                    display.textContent = num1;
                    console.log(negative);
                } else if (negative != "") {
                    if(num1.includes(negative)){
                        num1 = AddNum1(number.textContent);
                        display.textContent = num1;
                        console.log(negative);
                    }else{
                        if(negative === "-"){
                            num1 = negative + AddNum1(number.textContent);
                            display.textContent = num1;
                            negative = "";
                            console.log(negative);
                        } else {
                            num1 = AddNum1(number.textContent);
                            display.textContent = num1;
                        }
                        
                    }
                }
            }
        } else {
            if (num2.length <= 6){
                if(negative === ""){
                    num2 = AddNum2(number.textContent);
                    display.textContent = num2;
                    console.log(negative);
                } else if (negative != "") {
                    if(num2.includes(negative)){
                        num2 = AddNum2(number.textContent);
                        display.textContent = negative + num2;
                        console.log(negative);
                    }else{
                        if(negative === "-"){
                            num2 = negative + AddNum2(number.textContent);
                            display.textContent = num2;
                            negative = "";
                            console.log(negative);
                        } else {
                            num2 = AddNum2(number.textContent);
                            display.textContent = num2;
                        }
                        
                    }
                }
                
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
 //DOM for dot
dot.addEventListener("click", () => {
    if(operator === "" && num2 === ""){
        if(!num1.includes(".")){
            dDot = AddDOt(dot.textContent);
            num1 = num1 + dDot;
            display.textContent = num1;
        } else{
            display.textContent += "";
        }
    } else if (operator != "" && num1 != ""){
        if(!num2.includes(".")){
            dDot = AddDOt(dot.textContent);
            num2 = num2 + dDot;
            display.textContent = num2;
        } else{
            display.textContent += "";
        }
    }

});

//dot function
function AddDOt (d){
    return dDot = d;
}


//DOM to add operator
const operators = document.querySelectorAll(".btn-operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        
        if(operator === "" && num1 != ""){
            operator = AddOperator(op.textContent);
            display.textContent = num1 + operator;
        } else if (num1 === "" && operator === ""){
            negative = AddNegative(op.textContent);
            if (negative != "-"){
                display.textContent = "";
            }else {
                display.textContent = negative;
            }
        } else if (num1 != "" && operator === "*" || operator === "/"){
                negative = AddNegative(op.textContent);
                if (negative != "-"){
                    display.textContent += "";
                }else {
                    display.textContent = negative;
                }
        } else if (num1 != "" && operator != "" && num2 != ""){
            total = operate (num1, num2, operator);
            if (Number.isInteger(total)){
                display.textContent = total;
                num1 = total.toString();
                num2 = "";
                operator = AddOperator(op.textContent);
            } else {
                display.textContent = total.toFixed(1);
                num1 = total.toFixed(1);
                num2 = "";
                operator = AddOperator(op.textContent);
            }

            console.log(num1);
            console.log(operator);
            console.log(num2);
        }
    });
});

//Operator function
function AddOperator(op){
    return operator = op;
}

//Negative function
function AddNegative(n){
    return negative = n;
}

//DOM for equal button
const equal = document.querySelector(".btn-equal");
equal.addEventListener("click", () => {
    if(num1 != "" && operator != "" && num2 != ""){
    total = operate(num1, num2, operator);
    if (Number.isInteger(total)){
        display.textContent = total;
        num1 = total.toString();
        num2 = "";
        operator = "";
    } else {
        display.textContent = total.toFixed(1);
        num1 = total.toFixed(1);
        num2 = "";
        operator = "";
    }

    console.log("num1 es" + num1);
            console.log(operator);
            console.log(num2);
            console.log(negative);
}
});

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

function operate(num1, num2, operator){
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
    }
    return result;
}

