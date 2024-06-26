 //Given that have to return the a quanties of a phrase
 const phrase= document.getElementById('phrase');
 const button= document.getElementById('button');
 const answer= document.getElementById('answer');

 //Then i have to make a function wich show how many times do appear my vocals

const showInputVocals = () => {
    let evalPhrase= phrase.value;
    let savingVocals= evalPhrase.match(/[aeiou]/gi);

    let countVocals= {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
    };

    if (savingVocals) {
    savingVocals.forEach(element=> {
        if(element in countVocals){
            return countVocals[element]++;
        }else{
            return 0;
        }
    });        
    }
return countVocals
     }





//When i make click to my button!

button.addEventListener("click", () => {
    let getInputValue= showInputVocals();

    
    let turnString= JSON.stringify(getInputValue);

    return answer.innerHTML=`${turnString}`
})