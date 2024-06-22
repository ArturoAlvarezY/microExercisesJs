/*   <input type="text" id="phrase">
    <button id='button'>a counter</button>
    answer
    */

    //Given that have to return the a quanties of a phrase
const phrase= document.getElementById('phrase');
const button= document.getElementById('button');
const answer= document.getElementById('answer');



    //Then i am gonna make a function wich count them 

const countingLetters=()=>{
    let textToBeCounted= phrase.value;
    let findingLetter= textToBeCounted.match(/a/gi);
    let giveMeALength;

if(findingLetter){
    giveMeALength= findingLetter.length;
}else{
    giveMeALength='0';
}
     return giveMeALength;
}

//When i make click on my button!

button.addEventListener("click", ()=>{
    let aQuanty= countingLetters();

    return answer.innerHTML= `${aQuanty}`;
})
