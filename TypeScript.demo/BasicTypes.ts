let numVar: number = 25;
let strVar: string = "Hello, TypeScript!";
let boolVar: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let anyVar: any = "I can be anything!";

console.log("Number:", numVar);
console.log("String:", strVar);
console.log("Boolean:", boolVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);


/*function*/


function getUserInfo(age: number, isActive: boolean): string {
    let status = isActive ? "active" : "inactive";
    return `The user is ${age} years old and is currently ${status}.`;
}

// Example usage
let age: number = 30;
let isActive: boolean = true;

console.log(getUserInfo(age, isActive));
