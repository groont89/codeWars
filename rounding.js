//округление дробных чисел в зависимости от нахождения точки
function roundIt(n) {
    let numberStrSpl = n.toString().split("."); // преобраазуем число в строку и разделяем на массив на от точи и после точки
    if (numberStrSpl[0].length > numberStrSpl[1].length) { // сравниваем количество элементов до точки и после
        return Math.floor(n); // если количество элементов до точки больше то окруляем в меньшую сторону
    } else if (numberStrSpl[0].length < numberStrSpl[1].length) { // если количество элементов до точки меньше количества после точки
        return Math.ceil(n); //округляем в большую сторону
    } else { // если нет( количество элементов до точки и после равны)
        return Math.round(n); //округялем до ближайшего целого
    }
}
console.log(roundIt(3.43));