//Convert number to reversed array of digits
function digitize(n) {
    return (n + "").split("").reverse().map(Number);
}
console.log(digitize(23457));