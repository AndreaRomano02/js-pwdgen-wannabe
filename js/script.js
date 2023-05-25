console.log('JS OK')

//! Preliminari
const myPassword = document.getElementById('my-psw');
console.log(myPassword);

//! Funzioni
//? FisrtName
const firstname = prompt('Come ti chiami?', 'Andrea');
console.log(firstname);

//? LastName
const lastname = prompt('Qual\' è il tuo cognome?', 'Romano');
console.log(lastname);

//? Favourite Color
const favouriteColor = prompt('Qual\' è il tuo colore preferito?', 'Rosso');
console.log(favouriteColor);

//* Create Password
const psw = firstname + lastname + favouriteColor + '21';
console.log(psw);

//* Stampo la password
myPassword.innerText = psw;