export const date2String = (date: Date, isTimeExtended: boolean = false): string => {
    let s = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`;

    if (isTimeExtended) {
        s += ` ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
    }
    return s;
}