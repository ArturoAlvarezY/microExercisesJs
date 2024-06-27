//Given that i have to print divisors of given numbers

const input= document.getElementById('input');
const button= document.getElementById('button');
const answer= document.getElementById('answer');

//Then i have to make a function wich show me the divisor of each number

//if d is a divisor of n, this wanna means that n/d could divide n. This is the concept of square root

const findDivisors=(n)=> {
    let divisors = [];
    let sqrtN = Math.floor(Math.sqrt(n));

    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }

    return divisors
}


const showingDivisors=()=>{
    let takingString= input.value;
    let turningNumber= Number(takingString);
    let result= '';

    if (isNaN(turningNumber)) {
    result= 'Please set a number, not a string!!!'        
    } 
    else {
     let divisors= findDivisors(turningNumber);  
     result = `Divisors of ${turningNumber} are: ${divisors.toString()}`;
 }
    return result;
    }

button.addEventListener("click", ()=>{
    let giveMeDivisors= showingDivisors();
    answer.innerHTML= `${giveMeDivisors}`;
})