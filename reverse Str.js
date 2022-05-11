//перевернутые строки
//(split-разбиавет строку на массив символов, reverse- переворачивает массив, join- собирает строку из массива)

function solution(str) {
    return str.split("").reverse().join("");
}
console.log(solution("hello"));