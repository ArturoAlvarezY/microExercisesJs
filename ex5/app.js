/* <input type="text" id="firstNumber"> <br>
    <input type="text" id="secondNumber"> <br>
    <button id="greatherThan">who is greather?</button>
    <div id="showAnswer"></div>
    */

///Given that i have to determinate wich is the greater number, i am gonna make variables to manipulate the DOM elements

const firstNumber= document.getElementById("firstNumber");
const secondNumber= document.getElementById("secondNumber");
const button= document.getElementById("greatherThan");
const answer= document.getElementById("showAnswer");

/// then, i have to make functions wich take my number values

const getFirstValue=()=>{

    let stringNumber= firstNumber.value;
    let firstInputNumber= Number(stringNumber);

        return firstInputNumber;
    
    }

const getSecondValue=()=>{

    let stringSecondNumber= secondNumber.value;
    let secondInputNumber= Number(stringSecondNumber);

    return secondInputNumber;
    }

/*And return it WHEN i make click to my button */

button.addEventListener("click", ()=>{

    let saveFirstInput= getFirstValue();
    let saveSecondInput= getSecondValue();

    if (isNaN(saveFirstInput)) {

        return answer.innerHTML= "Please, set a number at the first input, no a string";

    }else if (isNaN(saveSecondInput)) {

        return answer.innerHTML= "Please, set a number at the second input, no a string";

    }
    
    if (saveFirstInput > saveSecondInput) {

        return answer.innerHTML= `${saveFirstInput} is greather than ${saveSecondInput}`;

    } else if(saveSecondInput > saveFirstInput){

        return answer.innerHTML= `${saveSecondInput} is greather than ${saveFirstInput}`;

    } else{

        return answer.innerHTML= `both numbers are equal!`;

    }
})