// task1
// var coinValue = Math.floor(Math.random() * 2) + 1;
// var result = (coinValue === 1) ? "Tails" : "Heads";
// document.write(coinValue + "<br>");
// document.write("Random coin value: " + result);

 // task2
// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue);

// task 3
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?';
let passwordLength = 10;
let password = '';


for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}

document.write("your password is: " + password);