/*Write a " while loop" that  calculates the sum of all numbefrs from 1 to 5 and stores the result in a variable
named sum.*/

const { log } = require("node:console");

// let sum=0;
// let i=1;
// while(i <= 5){
//     sum=sum+i;
//     i++;
    
// }
// console.log(sum);

/*
Write a " while loop" that  calculates down from 5 to 1 and stores the result in a array named 'countdown'
.
*/

// let sum=0;
// let countdown=[];
// let j=5;
// let i=1;
// while(j>=1){
//     countdown.push(j);
//     j--;

// }
// console.log(countdown);



/*

Write a do while loop that prompts a user to enter their fav tea type until they enter "stop". Store each tea type in an array named "teacollection"
*/


let teaCollection=[];
let tea;
do {
    tea=prompt(`enter your fav tea(type "stop"  to finish)`);
    if(tea!= "stop")
        teaCollection.push(tea);
} while (tea!="stop");
