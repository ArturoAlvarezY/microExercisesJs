//Given that i have to print Numbers divisible by 2, 3, 5 or 7

const input= document.getElementById('input');
const button= document.getElementById('button');
const answer= document.getElementById('answer');

const takingDivisor=(parameter)=>{
    let myDivisor=[]
    if(parameter % 2 === 0){
        myDivisor.push(2);
    }
    if(parameter % 3 === 0){
        myDivisor.push(3);
    } 
    if(parameter % 5 === 0){
        myDivisor.push(5);
    } 
    if(parameter % 7 === 0){
        myDivisor.push(7);
    }
    return myDivisor;
}

//then i am gonna make a function to turn in a number the string given by the input

const takingInputValue=()=>{
    let stringValue= input.value;
    let turningInNumber= Number(stringValue);
    let result= '';

    if ( isNaN (turningInNumber) ) {
        return 'Is not a number!';
    }
    else{
        let savingMyDivisors= takingDivisor(turningInNumber);
        if (savingMyDivisors.length === 0) {
            result= `${turningInNumber} is not divisible by 2, 3, 5 nor 7!`
        } 
        else {
            result = `${turningInNumber} es divisible por ${savingMyDivisors}.`;
         }
   }
    return result;
}

//When i make click in my button!

button.addEventListener("click", ()=>{
    const numberAndDivisors= takingInputValue();
    answer.innerHTML= `${numberAndDivisors}`;
})