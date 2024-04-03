let flowers = new Map
flowers.set ("Роза", "красная");
flowers.set ("Тюльпан", "желтый");
flowers.set ("Астра", "розовая");
for (let name of flowers.keys()){
  console.log ('Ключ - ' + name);
}
for (let color of flowers.values()){
  console.log ('значение - ' + color);
}
for (let elem of flowers) {
   console.log (elem);
}