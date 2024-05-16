
const btns = document.querySelectorAll("button");

function checkInput (input) {
    if (! operationsArray.includes(input)) {
        if (operation == "") {
            firstNumber += input;
            console.log(firstNumber);
            listOfOperations.push("first");
        } else {
        secondNumber += input;
        console.log(secondNumber);
        listOfOperations.push("second")
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
            } else if (input == "clear") {
                firstNumber = "";
                operation = "";
                secondNumber = "";
                answer = 0;
            } else if (input == "backspace") {
                let lastTask = listOfOperations[listOfOperations.length-1];

                switch (lastTask) {
                    case "first":
                    firstNumber = firstNumber.slice(0,-1);
                    console.log(firstNumber);
                    break;

                    case "second":
                    secondNumber = secondNumber.slice(0,-1);
                    console.log(secondNumber);
                    break;

                    case "operation":
                    operation = operation.slice(0,-1);
                    console.log(operation);
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