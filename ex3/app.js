//Given that must take the username from an input and print it somewhere 

const userName= document.getElementById('userName'); //input
const hiUser= document.getElementById('hiUser'); //div 


//then gonna make a function wich take the string of the input 
//And drop a message saying hi with its username



const takeStringFromInput = () => {
    let inputValue= userName.value;
      if(inputValue.length > 0){
        return hiUser.innerHTML= `hello ${inputValue}!!`
    } else{
       return hiUser.innerHTML= `mr White?`;
    }
};

//when i make click to one button, wich is who keep the salute
const button= document.getElementById('button')

button.addEventListener('click', takeStringFromInput)


