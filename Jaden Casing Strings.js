//Jaden Casing Strings
String.prototype.toJadenCase = function () {
    let arr = this.split(" ");
    let result = [];
    arr.map((item) => {
        result.push(item[0].toLocaleUpperCase() + item.slice(1));
    });
    return result.join(" ");
};
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());