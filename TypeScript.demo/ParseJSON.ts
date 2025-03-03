function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}

// Test cases
const validJson = '{"name": "Damon", "age": 25}';
console.log(parseJson(validJson)); // Output: { name: "Damon", age: 25 }

const invalidJson = '{"name": "Stefan", "age": 25'; // Missing closing brace
console.log(parseJson(invalidJson)); // Output: Error parsing JSON: Unexpected end of JSON input
