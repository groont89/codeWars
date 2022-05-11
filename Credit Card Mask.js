//Credit Card Mask
function maskify(cc) {
    let arr = cc.split("");
    if (arr.length >= 4) {
        return arr.fill("#", 0, arr.length - 4).join("");
    } else {
        return arr.join("");
    }

}
console.log(maskify('11111'));