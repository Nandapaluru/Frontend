// example.d.ts
declare module "SomeLibrary" {
    export interface AppConfig {
        apiUrl: string;
        retryCount: number;
    }

    export function initializeApp(config: AppConfig): void;
}
