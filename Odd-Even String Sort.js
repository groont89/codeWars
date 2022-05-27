//Odd-Even String Sort
function sortMyString(S) {
    let even = S.split('').filter((item, index) => index % 2 == 0).join("");
    let odd = S.split("").filter((item, index) => index % 2 != 0).join("");
    return even + " " + odd;
}
console.log((sortMyString("YCOLUE'VREER")));