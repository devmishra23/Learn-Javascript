Part 1 contains my beginner JavaScript practice code where I learned about Hoisting, variables, data types, objects, arrays, operators, and basic comparisons.

          
                What is Hoisting?

When JavaScript code runs, the engine does two passes before executing. In the first pass (compilation phase), it scans all variable and function declarations and registers them in memory. In the second pass, it executes line by line. The effect of the first pass is called "hoisting" — declarations are conceptually lifted to the top of their scope.

                          Topics Covered

1. Console Output
Learned how to print messages to the console.
console.log("Hello");


2. JavaScript Data Types
Primitive Data Types

String
Number
Boolean
BigInt
Undefined
Null
Symbol

Example:

let score = 102;
let name = "Dev Mishra";
let isLoggedIn = false;


3. Arrays
Arrays are used to store multiple values in a single variable.

let teaTypes = ["lemon tea", "orange tea", "oolong tea"];


4. Objects
Objects store data in key-value pairs.

let user = {
    firstname: "Devashish",
    lastname: "Mishra"
};


5. Variable Assignment
Understanding how values are copied between variables.

let getScore = score;
console.log(getScore);


6. let vs const
Using let Values can be reassigned.

let gameName = "spiderman";
gameName = "batman";

Using const
Values cannot be reassigned.

const game = "Pubg";


7. Arithmetic Operators
Performing mathematical operations.

let addition = 4 + 5;
Calculating total score:
let score = 102;
let bonus = 25;

let totalScore = score + bonus;
console.log(totalScore);


8. Comparison Operators
Used to compare values.

let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num2);
console.log(num1 != num3);
Operator	Meaning
==	Equal to
!=	Not equal to
>	Greater than
<	Less than
>=	Greater than or equal to
<=	Less than or equal to


9. Logical Operators

AND (&&)
Returns true only if both conditions are true.

let isLoggedIn = true;
let isPaid = false;

console.log(isLoggedIn && isPaid);
OR (||)

Returns true if at least one condition is true.

console.log(isLoggedIn || isPaid);
NOT (!)

Reverses the boolean value.

console.log(!isLoggedIn);



                  🎯 What I Learned

How JavaScript stores different types of data.
Difference between primitive and reference types.
Creating and using arrays and objects.
Variable declaration using let and const.
Arithmetic operations.
Comparison operators.
Logical operators.
Printing output using console.log().


