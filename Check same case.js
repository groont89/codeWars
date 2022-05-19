//Check same case
function sameCase(a, b) {
    let one = a.charCodeAt(0);
    let two = b.charCodeAt(0);
    if ((65 <= one && one <= 90) && ((65 <= two && two <= 90)) ||
        ((97 <= one && one <= 122) && ((97 <= two && two <= 122)))) {
        return 1;
    } else {
        if ((65 <= one && one <= 90) && ((97 <= two && two <= 122)) ||
            ((97 <= one && one <= 122) && ((65 <= two && two <= 90)))) {
            return 0;
        } else {
            return -1;
        }
    }

}
console.log(sameCase("$", "A"));