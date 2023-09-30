export abstract class Service {
    /**
     * Server Side API에서 사용되는 Service Instance
     * 해당 Service를 inherit해서 사용할 시, Singleton 형식으로 구현할 것을 권장
     */
    protected static instance: any | null = null;
    protected abstract async init();
    protected static async getInstance(): Promise<any> {};
}
