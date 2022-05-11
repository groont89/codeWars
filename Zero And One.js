//Simple Fun #154: Zero And One
function zeroAndOne(s) {
    let result = (s.replace(/10/g, "").replace(/01/g, "").length);
    return result;

}
console.log(zeroAndOne("00111001111110100100111100100101110111100010100"));