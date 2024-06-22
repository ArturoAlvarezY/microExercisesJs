///Given that i have to determinate wich is the greater number, i am gonna make variables to manipulate the DOM elements

const firstNumber= document.getElementById("firstNumber");
const secondNumber= document.getElementById("secondNumber");
const thirdNumber= document.getElementById("thirdNumber");
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

const getThirdValue=()=>{

    let stringThirdNumber= thirdNumber.value;
    let thirdInputNumber= Number(stringThirdNumber);
    
        return thirdInputNumber;

    }


/*And return it WHEN i make click to my button */

button.addEventListener("click", ()=>{

    let saveFirstInput= getFirstValue();
    let saveSecondInput= getSecondValue();
    let saveThirdinput= getThirdValue();

    if (isNaN(saveFirstInput) || isNaN(saveSecondInput) || isNaN(saveThirdinput)) {
        return answer.innerHTML = "Please, just set numbers at the inputs";
    }
    
    if (saveFirstInput > saveSecondInput && saveFirstInput > saveThirdinput) {

        return answer.innerHTML= `${saveFirstInput} is greather than ${saveSecondInput} and ${saveThirdinput}`;

    } else if(saveSecondInput > saveFirstInput && saveSecondInput > saveThirdinput){

        return answer.innerHTML= `${saveSecondInput} is greather than ${saveFirstInput} and ${saveThirdinput}`;

    } else if (saveThirdinput > saveFirstInput && saveThirdinput > saveSecondInput){

        return answer.innerHTML= `${saveThirdinput} is greather than ${saveFirstInput} and ${saveSecondInput}`;

    } else{
        return "your 3 numbers are equal!!!!!"
    }
})