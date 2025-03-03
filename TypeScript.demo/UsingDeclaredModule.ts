// usingDeclaredModule.ts
import { initializeApp, AppConfig } from "SomeLibrary";

const config: AppConfig = {
    apiUrl: "https://api.example.com",
    retryCount: 3
};

initializeApp(config);
console.log("Application initialized!");
