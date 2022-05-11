//Sort Numbers
function solution(nums) {
    let result = [];
    nums != null ? result = result.concat(nums.sort((a, b) => a - b)) : 
    result.concat([]);
    return result;
}
console.log(solution([1, 2, 10, 50, 5]));
console.log(solution(null));