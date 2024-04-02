// Version 1
function max(number) {
  let maxnum = Math.max(...number);
  return maxnum;
}
let input1 = [2, 3, 4, 56, 6, 44];
console.log(max(input1));
// Version2
function MAX(arr) {
  let maxnum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      maxnum = arr[i];
    }
  }
  return maxnum;
}
console.log(MAX(input1));

function findPosition(arr, target) {
  for (let i = 1; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}
console.log(findPosition(input1, 22));
