function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Test cases
try {
    console.log(divideNumbers(10, 2)); // Output: 5
    console.log(divideNumbers(10, 0)); // Throws an error
} catch (error) {
    console.error(error.message);
}
