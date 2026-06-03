# JavaScript Fundamentals – Part 3 : Conditional Statements 🚀

In this section of my JavaScript learning journey, I practiced using **if-else statements**, comparison operators, type checking, and boolean conditions.

---

##  Topics Covered

### 1. Checking if a Number is Greater Than Another Number

Using comparison operators inside an `if-else` statement.


let a = 51;
let b = 6;

if (a > b) {
    console.log("number is greater");
} else {
    console.log("number is smaller");
}


### Output

text
number is greater


---

### 2. Comparing Two Strings

Checking whether two strings are equal.

```javascript
let a = "Dev";
let b = "Dev";

if (a == b) {
    console.log("a and b are equal");
} else {
    console.log("a and b are not equal");
}
```

### Output

text
a and b are equal


---

### 3. Checking Whether a Variable is a Number

Using the `typeof` operator.

```javascript
let a = 44;

if (typeof a === "number") {
    console.log("it is a number");
} else {
    console.log("it is not a number");
}
```

### Output

```text
it is a number
```

---

### 4. Checking Boolean Values

Using a boolean directly in a condition.

```javascript
let isTeaReady = false;

if (isTeaReady) {
    console.log("Tea is ready");
} else {
    console.log("Tea is not ready");
}
```

### Output

```text
Tea is not ready
```

---

## 🎯 Key Concepts Learned

### Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `>`      | Greater Than             |
| `<`      | Less Than                |
| `>=`     | Greater Than or Equal To |
| `<=`     | Less Than or Equal To    |
| `==`     | Equal To                 |
| `===`    | Strict Equal To          |
| `!=`     | Not Equal To             |

---


### typeof Operator
Used to determine the data type of a variable.

```javascript
typeof 44;          // "number"
typeof "Dev";       // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
```

---

### if-else Statement Syntax

```javascript
if (condition) {
    // code executes if condition is true
} else {
    // code executes if condition is false
}
```

---

## 🔥 Skills Practiced

✅ if-else Statements

✅ Number Comparison

✅ String Comparison

✅ Boolean Conditions

✅ Type Checking

✅ Comparison Operators

✅ JavaScript Logic Building





** By Devashish Mishra**


