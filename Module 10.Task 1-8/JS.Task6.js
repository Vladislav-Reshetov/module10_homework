const arr = [1, 2, 1, 1];
let check = true;
for (let i = 1; i < arr.length; i++){
  const element = arr[i];
  if (element != arr[0]){
    check = false
    break
  }
}
console.log (check)