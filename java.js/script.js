let myData = [
    42,                       // Number
    "Hello, World!",          // String
    true,                     // Boolean
    null,                     // Null
    undefined,                // Undefined
    { name: "John", age: 30 },// Object
    [1, 2, 3],                // Array (which is also an object)
    function () { return "Hi"; }, // Function
    Symbol("unique"),         // Symbol
    BigInt(12345678901234567890n) // BigInt
];

console.log(myData);
