
const btns = document.querySelectorAll("button");
const screen = document.querySelector("#screen");

function checkInput (input) {
    if (! operationsArray.includes(input)) {
        if (operation == "") {
            firstNumber += input;
            showNumber(screen, firstNumber);
            listOfOperations.push("first");
        } else {
        secondNumber += input;
        showNumber(screen, secondNumber);
        listOfOperations.push("second");
        };
    } else {

        if (input == "clear") {
            firstNumber = "";
            operation = "";
            secondNumber = "";
            answer = 0;
            showNumber(screen, "");
        }   else if (firstNumber != "") {
                if (input == "=" && secondNumber != "") {
                    if (Number(secondNumber) == 0) {
                        showNumber(screen, "Cannot divide by 0.")
                    } else {
                    answer = Math.round(commupte()*1000) /1000;
                    showNumber(screen, answer.toString());
                    firstNumber = "";
                    operation = "";
                    secondNumber = "";
                    answer = 0;
                    };

                } else if (input == "backspace") {
                    let lastTask = listOfOperations[listOfOperations.length-1];

                    switch (lastTask) {
                        case "first":
                        firstNumber = firstNumber.slice(0,-1);
                        showNumber(screen, firstNumber);
                        break;

                        case "second":
                        secondNumber = secondNumber.slice(0,-1);
                        showNumber(screen, secondNumber);
                        break;

                        case "operation":
                        operation = operation.slice(0,-1);
                        break;
                    }

                    listOfOperations.pop();

                    } else {
                    if (operation == "") {
                        operation = input;
                        listOfOperations.push("operation")
                    }
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

function showNumber (screen, input) {

    screen.textContent = ""
    screen.textContent = input
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        checkInput(btn.textContent);
    });
});


let firstNumber = "";
let operation = "";
let secondNumber = "";
let answer = 0;
const listOfOperations = [];

const operationsArray = ["+", "-", "x", "/", "=", "clear", "backspace"]