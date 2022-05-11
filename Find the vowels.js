//Find the vowels
function vowelIndices(word) {
    let arr = ["a", "e", "i", "o", "u", "y"];
    let arrWord = word.split("");
    let result = [];
    for (let i = 0; i < arrWord.length; i++) {
        if (arr.indexOf(arrWord[i].toLowerCase()) != -1) {
            result.push(i + 1);
        }
    }

    return result;
}
console.log(vowelIndices("supercalifragilisticexpialidocious"));