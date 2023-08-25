/**
 * Get the time difference in seconds
 */
export function timeDifference(string: string, start: number, end: number) {
    const elapsed = (end - start) / 1000;
    console.log(`${string} It took ${elapsed} seconds.`);
}

export function getRandomMobileNumber(startdigit: string) {
    let randomMobile = '0' + startdigit + Math.random().toString().slice(2, 11);
    return randomMobile;
}

export function getSubStringByKey(mainString: string, key: string) {
    const indexOfFirst = mainString.indexOf(key);
    return mainString.slice(0, indexOfFirst);
}

export async function objectToJSONArrayWithoutKey(userdata: Object) {
    let jsonArray = JSON.parse(JSON.stringify(userdata)).default;
    return jsonArray;
}

export async function objectToJSONArrayWithKeys(userdata: Object) {
    const jsonArray = await Object.keys(userdata).map((key) => userdata[key]);
    return jsonArray;
}

