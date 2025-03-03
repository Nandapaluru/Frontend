function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const getter = () => value;
    const setter = (newValue: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newValue)) {
            throw new Error(`Invalid email format: ${newValue}`);
        }
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class UserProfile {
    @ValidateEmail
    public email: string;

    constructor(email: string) {
        this.email = email; // Triggers validation
    }
}

// Testing with valid email
const validUser = new UserProfile("test@example.com");
console.log("Valid email set successfully.");

// Testing with invalid email (will throw an error)
try {
    const invalidUser = new UserProfile("invalid-email");
} catch (error) {
    console.error(error.message);
}
