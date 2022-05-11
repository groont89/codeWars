//Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i]);
    }
    return result.sort((a, b) => b - a).join(">");
}
console.log(bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6]
]));