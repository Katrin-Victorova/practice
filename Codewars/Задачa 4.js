// должны вернуть балл студентов
// вернуть число финальное баллов
// 4 типа 100 90 75 0
// exam - от 0 до 100
// projects - число отражает работу в проекте
// не уместно делать цикл

// можно тернарный оператор, но читать очень сложно
//  swich case

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) {
    return 100;
  }else if(exam > 75 && projects >= 5) {
    return 90;
  }else if(exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
};