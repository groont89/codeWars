//перевернутые строки
//(split-разбиавет строку на символы, reverse- переворачивает массив, join- собирает строку из массива)

function solution(str){
    return str.split("").reverse().join("");
  }
  console.log(solution("hello"));


// training if..else ternarniy operator
function saleHotdogs(n){
  return (n<5) ? n*100 : ((n>=10) ? n*90 : n*95);
}
//округление дробных чисел в зависимости от нахождения точки
function roundIt(n){
  let numberStrSpl = n.toString().split(".");// преобраазуем число в строку и разделяемя на массив на от точи и после точки
  if (numberStrSpl[0].length > numberStrSpl[1].length) {// сравниваем количество элементов до точки и после
    return Math.floor(n); // если количество элементов до точки больше то окруляем в меньшую сторону
    } else if (numberStrSpl[0].length < numberStrSpl[1].length) {// если количество элементов до точки меньше количества после точки
      return Math.ceil(n);//округляем в большую сторону
      } else {// если нет( количество элементов до точки и после равны)
      return Math.round(n);//округялем до ближайшего целого
      }
  }
  console.log(roundIt(3.43));
  //методы split join map  (стрелочная функция)
 
  function splitAndMerge(str,sp){
    let words = str;
    return words.split(" ").map(index => index.split("").join(sp)).join(" ");//разделили строку на массив элементов рзделенных пробелом. 
   }
  console.log(splitAndMerge("my name is jhon", "-"));
// раскрытие стрелочной функцию в обычную
  // function splitAndMerge(str,sp){
  //   let word = str;
  //   let wordSplit = str.split(" ");
  //   let wordJoinWith = wordSplit.map ( (index) => {
  //     return index.split("").join(sp);
  //   });
  //   let theEnd = wordJoinWith.join(" ");
  // }
  // console.log(splitAndMerge("my name is jhon", " -"));


  // МЕТОДЫ перебора массива
  // filter
   const names = ['Ivan', 'Dmitriy', 'Anna', 'Gleb'];
   const newNames = names.filter(function(name){
     return name.length < 5;
   });
   console.log(newNames);

   //map
   const answers = ['iVan',' dmITRiy','PETRO','makSIM'];
   const newAnswers = answers.map(item => {
     return item.toLowerCase();
   });
   console.log(newAnswers);

   //every/some
   const everySome = [ 3, 'ivan', 'petro'];
   console.log(everySome.some(item => typeof(item) === 'number'));// хотябы один элемент в массиве
   console.log(everySome.every(item => typeof(item) === 'number'));//  все элементы в массике

   // reduce

    const arr = [1, 5, 6, 8, 9, 3];

                              // 0   1
                              // 1   5
                              // 6   6
                              // 12  8
                              // 20  9
                              // 29  3
                              // 32
    const rez = arr.reduce((sum,current) => sum +current);
    console.log(rez);

    const arr2 = [ 'apple', 'pear', 'plum'];

    const rez2= arr2.reduce((sum, current) => `${sum}, ${current}`);
    console.log(rez2);

//Training JS #5: Basic data types--Object 
//{name:"dog",legs:4,color:"white"} ====>"This white dog has 4 legs."
function animal(obj){
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
}


//Training JS #6: Basic data types--Boolean and conditional statements if..else
//Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
function trueOrFalse(val){
  if(val) return 'true';
 else return 'false';
}

//Convert a Boolean to a String
function booleanToString(b){
  return b ? "true" : "false";
  }


//Training JS #8: Conditional statement--switch
  function howManydays(month){
    var days;
    switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:// значение month проверяется со значением в кейсах(обьеденненных) 
        days = 31;// выводит количество дней для указанных месяцев
        break;
    case 4:
    case 6:  
    case 9:
    case 11:
        days = 30;
    break;
    case 2:
        days = 28;
    break;
        
    }
    return days;
  }

//String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr){
  let a; 
  !Array.isArray(arr) ? a = "It's a fake array" : 
   ((arr.indexOf(13) >= 0) && (arr.indexOf(5) >= 0 )) ? a = "It's a black array" : a = "It's a white array";
   return a;
}
  
console.log(blackAndWhite([5,12])); 
//Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr){
  let result =[];
  for ( let i = 0; i <arr.length; i++){
    result = result.concat(arr[i]);
  }
  return result.sort((a,b) => b-a).join(">");
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]));

//Make the Deadfish Swim
function parse( data ){
  let count = [0];
  let result = [];
  data.split("").map((item) => {
      item === "i" ? count[0] = count[0] + 1 :
      item === "d" ? count[0] = count[0] - 1 :
      item === "s" ? count[0] = Math.pow(count[0],2) :
      item === 'o' ? result.push(count[0]) :
      console.log();
  });
  return (result);
  }
  console.log(parse("iiisxxxdoso"));

//Sort Numbers
function solution(nums){
  let result =[];
      nums != null ? result =result.concat(nums.sort((a,b) => a-b)) : result.concat([]);
      return result;
  }
  console.log(solution([1, 2, 10, 50, 5]));
  console.log(solution(null));

//Bingo ( Or Not )
function bingo(a) {
  let arrBingo =[2,7,9,14,15];
  let arr= [];
  let result = a.sort((a,b) => a-b);
  let answer = (result.filter((item) => arrBingo.indexOf(item) != -1));
  answer.map((item) => {
  (arr.indexOf(item) === -1) ? arr.push(item) : 1;
  });
  if(arrBingo.join("")== arr.join("")){
      return "WIN";
  } else {
      return "LOSE";
  }
}
console.log(bingo([21,13,2,7,5,14,7,15,9,10]));

//Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
  return length *width *height;
  }
}

//Find the vowels
function vowelIndices(word){
  let arr = ["a", "e", "i", "o", "u", "y"];
  let arrWord = word.split("");
  let result=[];
  for( let i =0; i <arrWord.length; i++){
      if(arr.indexOf(arrWord[i].toLowerCase()) != -1) {
          result.push(i+1);
      }
  }
  
  return result;
}
console.log(vowelIndices("supercalifragilisticexpialidocious"));

//Credit Card Mask
function maskify(cc) {
  let arr = cc.split("");
  if(arr.length >= 4) {
      return arr.fill("#", 0,arr.length-4 ).join("");
  }else {
      return arr.join("");
  }
  
  }
  console.log(maskify('11111'));

  //Vowel Count
function getCount(str) {
  let vowelsCount = 0;
  let arr = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split("");
  for( let i=0; i<strArr.length; i++){
      if(arr.indexOf(str[i]) >=0){
          vowelsCount ++;
      }
  }
  
  
  return vowelsCount;
}
console.log(getCount("abracadabra"));

//Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let result;
  let dolphinSpeed;
  dolphin === true ? dolphinSpeed = 2 : dolphinSpeed = 1;
  ((pontoonDistance/youSpeed) < (sharkDistance/((sharkSpeed)/dolphinSpeed))) ?
     result = "Alive!" :
     result = "Shark Bait!";
    
  return result;
  }
  console.log(shark(24, 0, 4, 8, true));

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  let arr = this.split(" ");
  let result =[];
  arr.map((item) => {
    result.push(item[0].toLocaleUpperCase() + item.slice(1));
  });
  return result.join(" ");
 };
 var str = "How can mirrors be real if our eyes aren't real";
 console.log(str.toJadenCase());

//Chain me
function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}
function chain(input, fs) {
    return fs.reduce(function(input, fn) { return fn(input)}, input);
}
console.log(chain(3, [add, mult]));

//Turn with a Compass
function direction(facing, turn){
  let directions = ["N","NE", "E", "SE", "S", "SW","W","NW"];
  let turns = turn/45;
  let start = directions.indexOf(facing);
  let end = (start + turns) % directions.length;
  if(end >=0) {
    return directions[end];
  } else {
    let n = end *(-1);
    return directions[directions.length-n];
  }
}
console.log(direction("S", 180));

//Don't give me five!
function dontGiveMeFive(start, end){
  let result =[];
for ( let i = start; i <= end; i++){
  if(!i.toString().includes('5')){
    result.push(i);
  }
}
  return result.length;
  
}
console.log(dontGiveMeFive(4,56));

//Simple Fun #154: Zero And One
function zeroAndOne(s) {
  let result = (s.replace(/10/g,"").replace(/01/g, "").length);
  return result;
    
  }
  console.log(zeroAndOne("00111001111110100100111100100101110111100010100"));

//Circle area inside square
function squareAreaToCircle(size){
  return size = (Math.PI *(Math.pow((Math.sqrt(size)/2),2)));
    
}
console.log(squareAreaToCircle(9));