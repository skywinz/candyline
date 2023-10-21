export class SetFunc {
    public static isSubset<T>(mainSet: Set<T>, subSet: Set<T>): boolean {
        for (const e of subSet) {
            if (!mainSet.has(e)) {
                return false;
            }
        }
        return true;
    }
}