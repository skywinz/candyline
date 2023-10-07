export abstract class Repository {
    protected abstract async init(): Promise<void>;
    static async getInstance(): Promise<any> {}
}