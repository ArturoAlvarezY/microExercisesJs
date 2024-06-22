/*<input type="text" id="firstContent">
<input type="text" id="secondContent">
<div id="showAnswer"></div>
<button id="firstButton"></button>
<button id="secondButton"></button>
*/

//Given that have to print in screen the answer of two numbers
const firstNumber= document.getElementById("firstContent");
const secondNumber= document.getElementById("secondContent");
const answer= document.getElementById("showAnswer");
const firstButton= document.getElementById("firstButton")
const secondButton= document.getElementById("secondButton")

//Then i have to make an action wich give me back the answer of those inputs

//I have a problem, inputs just save Strings values, i have to turn them in Numbers.

const getFirstInputValue=()=>{
    let firstInputVal= firstNumber.value;
    let firstValNum= Number(firstInputVal)

    if(isNaN(firstValNum)){
       return answer.innerHTML=`Please, set a number at the first input`;
    }else{
        return firstValNum; 
    }
}
    
const getSecondInputValue=()=>{
    let seconInputVal= secondNumber.value;
    let secondValNum= Number(seconInputVal);

    if (isNaN(secondValNum)) {
        return answer.innerHTML= `Please, set a number at the second input`
    }else{
        return secondValNum
    }
}

//when i make click on my buttons

secondButton.addEventListener("click", ()=>{
    let saveFirst= getFirstInputValue();
    let saveSecond= getSecondInputValue();

     return answer.innerHTML= `the adition between ${saveFirst} and ${saveSecond} is: ${saveFirst+saveSecond}`
})
