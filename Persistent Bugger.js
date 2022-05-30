//Persistent Bugger.
function persistence(num) {
    let count = 0;
    while (num.toString().split('').length !== 1) {
        num = num.toString().split("").reduce((a, b) => a * b);
        count++;
    }
    return count;
}
console.log(persistence(39));