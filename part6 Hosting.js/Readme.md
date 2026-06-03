# JavaScript Hoisting — Complete Reference

> **One-liner:** Hoisting = JS moves declarations to the top of their scope during compilation, before any code runs.

---

## How JS Runs Code (2 Phases)

```
Phase 1 — Compilation   → Scans all declarations, sets up memory
Phase 2 — Execution     → Runs code line by line
```
Hoisting is entirely Phase 1 behaviour.

---

## Hoisting Cheatsheet

| Declaration | Hoisted? | Initial Value | Access Before Declaration |
|---|---|---|---|
| `var x` | ✅ Yes | `undefined` | `undefined` (no error) |
| `let x` | ✅ Yes* | uninitialized (TDZ) | `ReferenceError` |
| `const x` | ✅ Yes* | uninitialized (TDZ) | `ReferenceError` |
| `function foo(){}` | ✅ Fully | complete function | works perfectly |
| `var foo = function(){}` | ⚠️ Partial | `undefined` | `TypeError` |
| `const foo = () => {}` | ✅ Yes* | uninitialized (TDZ) | `ReferenceError` |
| `class Foo {}` | ✅ Yes* | uninitialized (TDZ) | `ReferenceError` |

---

## var — Hoisted to Function Top

```js
console.log(x);   // undefined (NOT an error)
var x = 5;
console.log(x);   // 5

// What JS actually does:
var x;            // ← hoisted here
console.log(x);   // undefined
x = 5;
console.log(x);   // 5
```

> ⚠️ `var` ignores blocks — it leaks out of `if`, `for`, `while`.

```js
function test() {
  console.log(a);   // undefined — hoisted even from inside if(false)!
  if (false) {
    var a = 10;     // never runs, but declaration is still hoisted
  }
}
```

---

## let / const — Temporal Dead Zone (TDZ)

```js
console.log(x);   // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

```js
{
  // ← TDZ for 'city' starts here
  // console.log(city);  // ReferenceError if uncommented
  let city = "Varanasi";
  // ← TDZ ends here
  console.log(city);     // "Varanasi" ✅
}
```

> **Why TDZ?** To catch bugs. `var` silently returns `undefined` for uninitialised reads. `let`/`const` throw an error immediately.

---

## Function Declarations — Fully Hoisted

```js
greet();                   // ✅ "Hello!" — works before declaration

function greet() {
  console.log("Hello!");
}
```

---

## Function Expressions — Partially Hoisted

```js
// var function expression
sayHi();                   // ❌ TypeError: sayHi is not a function
var sayHi = function() { console.log("Hi"); };

// const arrow function
sayBye();                  // ❌ ReferenceError
const sayBye = () => { console.log("Bye"); };
```

> `var sayHi` is hoisted as `undefined`. Calling `undefined()` = `TypeError`.  
> `const sayBye` is in TDZ. Accessing it = `ReferenceError`.

---

## Error Types — Know the Difference

| Situation | Error |
|---|---|
| `let`/`const` accessed in TDZ | `ReferenceError` |
| Truly undeclared variable | `ReferenceError` |
| `var` function expression called before assignment | `TypeError` |

```js
foo();          // TypeError   — var foo is undefined, calling undefined()
var foo = function() {};

bar();          // ReferenceError — bar is in TDZ
const bar = function() {};
```

---

## Function Declaration vs var — Same Name

```js
console.log(typeof foo);   // "function" ← function wins during hoisting
var foo = "hello";
function foo() {}
console.log(typeof foo);   // "string"   ← var assignment overwrites in execution
```

> **Rule:** When `var` and `function` share a name, function declaration wins in Phase 1. Then the `var` assignment overwrites it in Phase 2.

---

## Hoisting Inside Blocks

```js
// var — hoisted to function scope, ignores blocks
function demo() {
  console.log(x);    // undefined
  if (true) {
    var x = 10;      // hoisted to function top
  }
  console.log(x);    // 10
}

// let — hoisted to block scope only
function demo2() {
  if (true) {
    console.log(y);  // ❌ ReferenceError — TDZ inside this block
    let y = 20;
    console.log(y);  // 20 ✅
  }
}
```

---

## Classic Traps

### Trap 1 — var shadowing global
```js
var score = 100;

function getScore() {
  console.log(score);  // undefined ← local var shadows global from start
  var score = 200;
  console.log(score);  // 200
}
```

### Trap 2 — if(false) still hoists
```js
function test() {
  console.log(foo);    // undefined — declaration hoisted even though block never runs
  if (false) {
    var foo = "never";
  }
}
```

### Trap 3 — switch TDZ across cases
```js
switch (x) {
  case 1:
    let result = "one";
    break;
  case 2:
    console.log(result);  // ❌ ReferenceError — TDZ crosses cases
}
// Fix: wrap each case body in {}
```

### Trap 4 — Closures capture by reference, not value
```js
function foo() {
  var x = 1;
  function bar() { console.log(x); }
  x = 2;
  bar();   // 2 — not 1! Closure sees the live value of x
}
```

---

## Execution Context (The Engine Behind Hoisting)

```
Global Execution Context
├── Creation Phase
│   ├── var declarations  → undefined
│   ├── function decls    → full body stored
│   └── let/const         → TDZ (uninitialized)
└── Execution Phase
    └── assignments & calls run line by line
```

Every function call creates a new Execution Context with the same two phases.

---

## 6-Step Mental Model for Any Hoisting Question

1. Is it `var`? → hoisted to **function top**, value = `undefined`
2. Is it `let`/`const`? → hoisted to **block top**, stays in TDZ
3. Is it `function foo(){}`? → **fully hoisted**, callable anywhere in scope
4. Is it `var foo = function(){}`? → only `var foo` hoisted as `undefined`, calling it = `TypeError`
5. Same name for `var` and `function`? → **function wins** in Phase 1, `var` assignment overwrites in Phase 2
6. Local `var` same name as global? → local **shadows global from function start** (not from assignment line)

---

## Quick Interview Answers

**Q: Are `let`/`const` hoisted?**  
Yes — but they're uninitialized (TDZ). Proof: accessing a `let` variable in the same block before its line throws `ReferenceError`, not `ReferenceError: x is not defined` — which proves it was registered.

**Q: Why does `var` return `undefined` instead of an error?**  
Because `var` is initialized to `undefined` at hoist time (Phase 1). The assignment happens later in Phase 2.

**Q: Why does TDZ exist?**  
To prevent the silent `undefined` bug of `var`. If you read before write, you get an explicit error immediately.

**Q: What's the difference between TypeError and ReferenceError in hoisting?**  
`ReferenceError` = variable doesn't exist or is in TDZ. `TypeError` = variable exists (`undefined`) but you're doing something invalid with it (like calling it as a function).

---

*Topic: JavaScript Hoisting | Part of JS Zero → Interview-Ready Series*