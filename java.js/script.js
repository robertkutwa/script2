let allDataTypes = [
    42,                       
    "Hello, World!",         
    true,                    
    null,                    
    undefined,                
    { name: "John", age: 30 },
    [1, 2, 3],                
    function () { return "Hi"; }, 
    Symbol("unique"),      
    BigInt(12345678901)
];

console.log(allDataTypes);

let idName = ['Robert', 'Onyango ']

console.log(idName);

idName.push('Kutwa')

console.log(idName);

console.log(idName[2]);

console.log(idName.length);

let cars = ["Mazda", "Wrangler", "Trueno"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]); 
}

let fruits = ["Orange", "Banana", "Berry"];

for (let fruit of fruits) {
    console.log(fruit); 
}
