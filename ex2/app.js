//Given that i have to write in the screen an adition between 2 numbers and print it answer

const adition= document.getElementById('adition');

//Then i have to make a function wich make an adition between them

const showAditionInScreen = (n1, n2) => {
    return adition.innerHTML= `the adition between 3 and 5 is ${n1 + n2}`
};

///Where i call my function

showAditionInScreen(3, 5)
