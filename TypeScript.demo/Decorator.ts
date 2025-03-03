function LogInstance(constructor: Function) {
    console.log(`Class ${constructor.name} was instantiated.`);
}

@LogInstance
class User {
    constructor(public name: string) {
        console.log(`User ${this.name} created.`);
    }
}

// Creating an instance of User
const user1 = new User("Damon");
