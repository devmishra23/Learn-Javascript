JavaScript Fundamentals – Part 2🚀

In this section of my JavaScript learning journey, I explored different data types, wrapper objects, template literals, objects, and arrays.

                               Topics Covered

1. Numbers
JavaScript provides the Number data type for numeric values.

let balance = 120;
console.log(typeof balance); // number

JavaScript also has a Number Object wrapper:
let anotherBalance = new Number(120);

⚠️ Using new Number() creates an object instead of a primitive number and is rarely needed.


2. Booleans
Booleans represent true or false values.

let isActive = true;

Boolean Object Wrapper:
let isReallyActive = new Boolean(true);

⚠️ Using new Boolean() is generally not recommended because it creates an object rather than a primitive boolean.


3. Null and Undefined
Undefined
A variable declared without a value is undefined.

let firstName;
console.log(typeof firstName); // undefined

Null
null represents an intentional absence of value.

let data = null;


4. Strings
Strings store textual data.
let username = "devashish";


5. Template Literals
Template literals make string interpolation easier using backticks ( ).
const phone = 5;
let newGreet = `Hello ${username} have ${phone} phone!`;
console.log(newGreet);

Output: Hello devashish have 5 phone!


6. Objects
Objects store data as key-value pairs.
let user = {
    firstname: "devashish",
    isloggedin: true
};
Updating Properties
user.firstname = "Mr. DEV";
Adding New Properties
user.lastname = "Mishra";

Example Object:

{
    firstname: "Mr. DEV",
    lastname: "Mishra",
    isloggedin: true
}


7. Arrays
Arrays can store multiple values of different data types.
let heroes = ["a", "b", "c", true];
Accessing Elements:
console.log(heroes[0]);

Output: a


🎯 Key Learnings
Difference between primitive values and wrapper objects.
Understanding Number and Boolean types.
Meaning of null and undefined.
Creating strings using template literals.
Creating and modifying objects.
Storing multiple values using arrays.
Accessing array elements using indexes.