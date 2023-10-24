export const date2String = (date: Date, isTimeExtended: boolean = false): string => {
    let s = `${date.getUTCFullYear()}년 ${date.getUTCMonth() + 1}월 ${date.getUTCDate()}일`;


    if (isTimeExtended) {
        s += ` ${date.getUTCHours()}시 ${date.getUTCMinutes()}분 ${date.getUTCSeconds()}초`;
    }
    return s;
}