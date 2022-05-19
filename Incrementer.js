//Incrementer
function incrementer(nums) {
    let result = nums.map((item, index) => {
        if (("" + (item + (index + 1))).length >= 2) {
            return ((item + (index + 1)) % 10);
        } else {
            return ((item + (index + 1)));
        }
    });
    return result;
}
console.log(incrementer([3, 6, 9, 8, 9])); //[ 4, 8, 2, 2, 2 ]