/**
 * Repository 는 RDB를 대신해서 데이터베이스 역할을 합니다.
 * 따라서 하나의 프로세스에 한개의 Repository가 생성되어야 하므로
 * Singleton체제를 따른다.
 */
export abstract class Repository {
    /**
     * constructor 대신에 사용되는 함수로
     * 처음 instance를 생성할때 작동되는 함수
     */
    protected abstract async init(): Promise<void>;

    /**
     * 외부에서 instance를 가져올때 사용되는 함수로
     * instance가 없으면 init을 이용해서 생성하고
     * 있으면 기존의 것을 가져온다.
     */
    static async getInstance(): Promise<any> {}
}