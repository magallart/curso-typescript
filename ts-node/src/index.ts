import { printObject, genericFunction, genericArrowFunction } from './generics/generics';

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject('Hola Mundo');

console.log(genericFunction(3.14159).toFixed(2));
console.log(genericFunction('Hola Mundo').toUpperCase());
console.log(genericFunction(new Date()).getDate());
console.log('--------------');
console.log(genericArrowFunction(3.14159).toFixed(2));
console.log(genericArrowFunction('Hola Mundo').toUpperCase());
console.log(genericArrowFunction(new Date()).getDate());
