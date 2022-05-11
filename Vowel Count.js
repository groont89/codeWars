//Vowel Count
function getCount(str) {
    let vowelsCount = 0;
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (arr.indexOf(str[i]) >= 0) {
            vowelsCount++;
        }
    }


    return vowelsCount;
}
console.log(getCount("abracadabra"));