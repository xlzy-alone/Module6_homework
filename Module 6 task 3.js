function createAddFunction(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

let addFunction = createAddFunction(5);
console.log(addFunction(3));
