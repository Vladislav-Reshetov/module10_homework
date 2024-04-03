let a;
a = +prompt ('Введите значение');
if(isNaN (a)) {
  console.log ('Упс, кажется, вы ошиблись'); 
}else {
  if (a % 2 === 0) {
    console.log ('Even');
  }else {
    console.log ('Odd');
  }
}