# JavaScript Fundamentals – Part 5: Functions 🚀

In this section of my JavaScript learning journey, I explored **functions**, **parameters**, **return values**, and **nested functions**.

---

# 📚 Topics Covered

## 1. Creating a Simple Function

A function is a reusable block of code that performs a specific task.

```javascript
function greet(name){
    console.log(`Hello ${name}`);
}

greet("devashish");
```

### Output

```text
Hello devashish
```

---

## 2. Functions with Parameters

Functions can accept values called **parameters**.

```javascript
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("black tea");
console.log(teaOrder);
```

### Output

```text
Making black tea
```

### What I Learned

* How to pass data into a function.
* How to use parameters.
* How to return values using `return`.

---

## 3. Nested Functions

A function can be created inside another function.

```javascript
function orderTea(teaType){

    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }

    return confirmOrder();
}

console.log(orderTea("Masala Chai"));
```

### Output

```text
Order confirmed for Masala Chai
```

### What I Learned

* Functions can contain other functions.
* Inner functions can access variables from their outer function.
* This concept is the foundation of **closures** in JavaScript.

---

# 🎯 Key Concepts Learned

### Function Declaration

```javascript
function functionName(){
    // code
}
```

---

### Function with Parameters

```javascript
function greet(name){
    console.log(name);
}
```

---

### Returning Values

```javascript
function add(a,b){
    return a+b;
}
```

---

### Nested Functions

```javascript
function outer(){

    function inner(){
        console.log("Hello");
    }

    inner();
}
```

---

