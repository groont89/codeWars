//Vowel one
function vowelOne(s) {
    let vowels = "aeiou";
    let result = [];
    for (let i of s.toLowerCase()) {
        if (vowels.includes(i)) {
            result.push("1");
        } else {
            result.push("0");
        }
    }
    return result.join("");
}
console.log(vowelOne("u@y5PEM/UoIAIA/ENAZ|eE9e{Ei;Io")); // "100001001111110101001101011011"