/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/


let burgerPrice = 190;
let cokePrice = 30;

if( burgerPrice > 500){
  console.log('Coke Is Free');
}else{
  console.log(`Coke Price Is: ${cokePrice}`);
}

// ternary oparetor

// burgerPrice > 500 ? console.log('coke is free') :   console.log(`Coke Price Is: ${cokePrice}`);


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


let weight  = 40;
let height  = 20;

let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log('you are underweight');
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log('you are normal');
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log('you are overweight');
} else {
  console.log('you are obese');
}

// gpa calcalutor

const gpa = Math.round(59.9);

if (gpa >= 90 && gpa <= 100) {
  console.log('You got A');
} else if (gpa >= 80 && gpa <= 89) {
  console.log('You got B');
} else if (gpa >= 70 && gpa <= 79) {
  console.log('You got C');
} else if (gpa >= 60 && gpa <= 69) {
  console.log('You got D');
} else if (gpa >= 50 && gpa <= 59) {
  console.log('You got F');
} else {
  console.log('Invalid GPA or you got lower than C');
}


// nested using of condition


/*
 
!if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

 */ 


const myScore =  30 ;
const friendScore = 50;


if(myScore > 80){
    if(friednScore > 80){
      console.log('Go for lunch together');
    }else if(friendScore >= 60 && friendScore <= 80){
      console.log('good luck next time');
    }else if(friendScore >= 40 && friendScore <= 60){
      console.log("keep your friend's message unseen");
    }else{
      console.log('Block Your friend');
    }
}else{
  console.log("Go home, sleep, and act sad.");
}


//! simple ternary oparetor

var num1 = 10;
var num2 = 10;
var result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);












