//Get decimal part of the given number
function getDecimal(n) {
    if (n % 1 == 0) {
        return 0;
    } else {
        return Number('0.' + String(n).split('.')[1]);
    }
}
console.log(getDecimal(4.5));