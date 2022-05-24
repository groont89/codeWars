//Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers) {
    let result = [];
    let arr = numbers.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }

    return result.splice(0, 3).reduce((sum, el) => sum + el, 0);
}
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));