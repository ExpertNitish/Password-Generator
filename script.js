const passwordCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', , '?', '/' 
];

let btn = document.querySelector('button');
let password1 = document.querySelector('#pass1');
let password2 = document.querySelector('#pass2');
let password3 = document.querySelector('#pass3');
let password4 = document.querySelector('#pass4');
let password5 = document.querySelector('#pass5');

btn.addEventListener('click', function(){
  password1.textContent = generatepassword(15);
  password2.textContent = generatepassword(15); 
  password3.textContent = generatepassword(15); 
  password4.textContent = generatepassword(15); 
  password5.textContent = generatepassword(15); 
})

function getRandomChar(){
  let index = Math.floor(Math.random()* passwordCharacters.length);
return passwordCharacters[index];
}

function generatepassword(length){
  let password = '';
  for(let i=0; i<length; i++ ){
    password += getRandomChar();
  }
  return password;
}