//every/some
const everySome = [ 3, 'ivan', 'petro'];
console.log(everySome.some(item => typeof(item) === 'number'));// хотябы один элемент в массиве
console.log(everySome.every(item => typeof(item) === 'number'));//  все элементы в массике