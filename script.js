
const btns = document.querySelectorAll("button");

function checkInput (input) {
    if (! operationsArray.includes(input)) {
        if (operation == "") {
            firstNumber += input;
            console.log(firstNumber);
        } else {
        secondNumber += input;
        console.log(secondNumber);
        };
    } else {
        if (firstNumber != "") {
            if (input == "=" && secondNumber != "") {
                answer = commupte();
                console.log(answer);
                firstNumber = "";
                operation = "";
                secondNumber = "";
                answer = 0;
            } else {
            operation = input;
            };
        };
    } ;
};

function commupte () {
    let first = Number(firstNumber);
    let second = Number(secondNumber);

    switch (operation) {
        case "+":
        return first + second;

        case "-":
        return first - second;

        case "x":
        return first * second;

        case "/":
        return first / second;
    }
};

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        checkInput(btn.textContent);
    });
});


let firstNumber = "";
let operation = "";
let secondNumber = "";
let answer = 0;

const operationsArray = ["+", "-", "x", "/", "="]