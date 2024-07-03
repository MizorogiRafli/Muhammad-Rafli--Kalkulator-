function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const operator = document.getElementById('operator').value;

    let result;
    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter valid numbers");
        return;
    }

    switch (operator) {
        case 'add':
            result = input1 + input2;
            break;
        case 'subtract':
            result = input1 - input2;
            break;
        case 'multiply':
            result = input1 * input2;
            break;
        case 'divide':
            if (input2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = input1 / input2;
            break;
        default:
            alert("Invalid operator");
            return;
    }

    alert("The result is: " + result);
}