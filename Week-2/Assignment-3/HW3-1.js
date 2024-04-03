//Version 1
function count(input) {
  let alphnum = {};
  input.forEach(function (alph) {
    if (alphnum[alph]) {
      alphnum[alph]++;
    } else {
      alphnum[alph] = 1;
    }
  });
  return alphnum;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); //Should print{ a: 3, b: 1, c: 2, x: 1 }

//Version 2
function Count(input) {
  var obj = {};
  for (let i = 0; i < input.length; i++) {
    var str = input[i];
    if (obj[str]) {
      obj[str]++;
    } else {
      obj[str] = 1;
    }
  }
  return obj;
}

console.log(Count(input1)); //Should print { a: 3, b: 1, c: 2, x: 1 }
