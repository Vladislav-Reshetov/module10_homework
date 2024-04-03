let result = randomNumber (0, 100);
function randomNumber (min, max) {
  return Math.floor (Math.random() * (max - min) + min);
}
console.log (result);