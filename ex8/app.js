 //Given that have to return the a quanties of a phrase
 const phrase= document.getElementById('phrase');
 const button= document.getElementById('button');
 const answer= document.getElementById('answer');

 //then, i have to write a function wich grab me the vocals

const TakingVocals=()=>{
    let evalWord= phrase.value;
    let extractVocalsWord= evalWord.match(/[aeiou]/gi);
    let giveMeVocals;

    if (extractVocalsWord) {
        giveMeVocals=extractVocalsWord;
    } else {
        giveMeVocals=0;
    }

    return giveMeVocals;
}

button.addEventListener("click", ()=>{
    let printVocals= TakingVocals();
    
    return answer.innerHTML= `${printVocals}`
})