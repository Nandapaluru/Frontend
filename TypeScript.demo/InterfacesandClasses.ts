/* Q3: Interface Person and Class Employee*/

interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    }
}

const emp = new Employee("John Doe", 30, 101);
console.log(emp.getEmployeeDetails());

//Q4: Interface Vehicle and Class Car

interface Vehicle {
    startEngine(): string;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): string {
        return `The engine of the ${this.year} ${this.make} ${this.model} is now running.`;
    }
}


const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());
