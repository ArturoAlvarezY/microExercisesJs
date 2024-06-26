//Given that i have to print Numbers divisible by 2, 3, 5 or 7

const input= document.getElementById('input');
const button= document.getElementById('button');
const answer= document.getElementById('answer');

//then i am gonna make a function to turn in a number the string given by the input

const isItDivisible=()=>{

let stringNumber= input.value;
let turningInNumber= Number(stringNumber);
let result='';

if (isNaN(turningInNumber)) {
    result = 'Invalid input: not a number';
}

 if(turningInNumber % 3 === 0){
     result = 'Divisible by 3';
}
else if(turningInNumber % 5 === 0){
     result ='Divisible by 5';
}
else if(turningInNumber % 7 === 0){
     result ='Divisible by 7';
}
else{
    result = 'is not divisible by any of them';
}
return result;
}

//When i make click in my button!

button.addEventListener("click", ()=>{
    let savingNumber= isItDivisible();
    return answer.innerHTML= `${savingNumber}`;
})
