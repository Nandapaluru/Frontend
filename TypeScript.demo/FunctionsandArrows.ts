//Q8: Convert a Normal Function to an Arrow Function

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

console.log(multiplyNumbers(4, 5)); 

const multiplyNumbersArrow = (a: number, b: number): number => a * b;

console.log(multiplyNumbersArrow(4, 5)); 

// Q9: Arrow Function to Sum an Array of Numbers

const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum([1, 2, 3, 4, 5])); 
console.log(sum([10, 20, 30])); 


