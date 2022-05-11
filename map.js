// МЕТОДЫ перебора массива
//map
const answers = ['iVan', ' dmITRiy', 'PETRO', 'makSIM'];
const newAnswers = answers.map(item => {
    return item.toLowerCase();
});
console.log(newAnswers);