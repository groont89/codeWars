//Combine objects
function comb(){
    let arr = [...arguments];
    let result = {};
    for( let i =0; i <= arr.length; i ++){
        for( let key in arr[i]) {
            if(!result[key]) {
                result[key] = arr[i][key];
            } else {
                result[key] += arr[i][key];
            }
        }
    }
    return result;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
comb(objA,objB);