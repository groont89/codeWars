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