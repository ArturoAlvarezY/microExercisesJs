const answer = document.getElementById('answer');

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

let number = parseInt(prompt("Ingrese un número para verificar si es primo:"));

if (isNaN(number)) {
    answer.innerHTML = "Por favor, ingrese un número válido.";
} 
else {
    if (isPrime(number)) {
        answer.innerHTML = `${number} es un número primo.`;
    } 
    else {
        answer.innerHTML = `${number} no es un número primo.`;
    }
}
