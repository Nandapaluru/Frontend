//Q5: Generic Function

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello, TypeScript!"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));


//Q6: Enum Color and Function getColorName

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorName(color: Color): string {
    return `The selected color is ${color}.`;
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));


//Q7: Function printDetails for Union Type (string | number)

function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

printDetails("Hello, World!");
printDetails(100);
