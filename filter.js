// МЕТОДЫ перебора массива
// filter
const names = ['Ivan', 'Dmitriy', 'Anna', 'Gleb'];
const newNames = names.filter(function (name) {
    return name.length < 5;
});
console.log(newNames);