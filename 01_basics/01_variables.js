const accountId = 20011255
let accountEmail = "cdivyanshu10@gmail.com"
var accountPass = "12345"
accountCity = "Dehradun"

// accountId = 2
accountEmail= "cdivz@gmail.com"
accountPass = 123123
accountCity = "Lucknow"
let accountState;
console.log(accountId)

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

// Example 1: var
function varExample() {
    console.log("var before declaration:", x); // undefined due to hoisting
    var x = 10;
    if (true) {
        var x = 20; // Same variable (function-scoped)
        console.log("Inside if block (var):", x); // 20
    }
    console.log("Outside if block (var):", x); // 20
}

varExample();

// Example 2: let
function letExample() {
    // console.log("let before declaration:", y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    if (true) {
        let y = 20; // New variable (block-scoped)
        console.log("Inside if block (let):", y); // 20
    }
    console.log("Outside if block (let):", y); // 10
}
letExample();

// Example 3: const
function constExample() {
    const z = 10;
    console.log("const value:", z); // 10
    // z = 20; // TypeError: Assignment to constant variable
    if (true) {
        const z = 20; // New variable (block-scoped)
        console.log("Inside if block (const):", z); // 20
    }
    console.log("Outside if block (const):", z); // 10
}
constExample();
