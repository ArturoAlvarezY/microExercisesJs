const answer = document.getElementById('answer');

const findDivisors = (number) => {
    let divisors = [];
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
};

const commonDivisors = (num1, num2) => {
    let divisors1 = findDivisors(num1);
    let divisors2 = findDivisors(num2);
    let common = [];

    for (let i = 0; i < divisors1.length; i++) {
        if (divisors2.includes(divisors1[i])) {
            common.push(divisors1[i]);
        }
    }
    return common;
};

let number1 = parseInt(prompt("Please enter the first number:"));
let number2 = parseInt(prompt("Please enter the second number:"));

if (isNaN(number1) || isNaN(number2)) {
    console.log("Please enter valid numbers.");
} else {
    let common = commonDivisors(number1, number2);
    answer.innerHTML = `The common divisors of ${number1} and ${number2} are: ${common.join(', ')}.`;
}
