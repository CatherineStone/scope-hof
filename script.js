// Activity 1:

// const greet = () => {
//     console.log("Hello CodeNation")
// }


// const higherOrderFunc = (funcToRun) => {
//     for (let i = 0; i < 5; i++){
//     funcToRun();
// }
// };

// higherOrderFunc(greet);






// // Activity 2:

// // variable that holds an array of numbers
// const numbers = [1, 2, 3, 4, 5]

// // the map method is a higher order function as we need to pass a function as an argument to the map method
// // the map method then takes the value you are returning and adds it to a new array
// // then that new array of numbers * 3 is stored in the variable newArr
// let newArr = numbers.map((num) => {
//     return num * 3
// })

// console.log(newArr)





// // Activity 3:
// const add = (a, b) => { return a + b;
// };
// const subtract = (a, b) => {
//     return a - b;
// };
// const multiply = (a, b) => { return a * b;
// };
// const divide = (a, b) => {
//     return a / b;
// };
// const doMaths = (num1) => { return (num2, fn) => {
//         return fn(num1, num2);
//     };
// };

// console.log( doMaths(2)(5, multiply)) 
// const getRandomQuote = async () => {

//     try{
//         const response = await fetch("https://api.quotable.io/random");
//         const data = await response.json();

//         console.log(`"${data.content}"`);
//         console.log(`- ${data.author}`);
//     } catch (err) {
//         console.log(err.statusText);
//     }
    
// }

getRandomQuote();

// let getQuoteBtn = document.getElementById("getQuoteBtn");
// let quote = document.getElementById("quote");

// getQuoteBtn.addEventListener("click", ) = {

// }