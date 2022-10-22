const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let passwordOne = "";
// let passwordTwo = "";
let firstPw = document.querySelector("#fieldone-el");
let secondPw = document.querySelector("#fieldtwo-el");

function generatePassword () {
    let passwordOne = "";
    let passwordTwo = "";
    for (let i = 0; i < 15; i++){
        let randomCharOne = Math.floor(Math.random() * characters.length);
        let randomCharTwo = Math.floor(Math.random() * characters.length);
        passwordOne += characters[randomCharOne];
        passwordTwo += characters[randomCharTwo]; 
    }
    firstPw.textContent = passwordOne;
    secondPw.textContent = passwordTwo;
}
