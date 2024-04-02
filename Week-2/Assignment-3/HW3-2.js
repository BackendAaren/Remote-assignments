function groupByKey(input) {
  var result = {};
  for (let i = 0; i < input.length; i++) {
    var key = input[i].key;
    var value = input[i].value;
    if (result[key]) {
      result[key] += value;
    } else {
      result[key] = value;
    }
  }
  return result;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}

// forEach版本
function groupbyKey(input) {
  const obj = {};
  input.forEach((data) => {
    if (obj[data.key]) {
      obj[data.key] += data.value;
    } else {
      obj[data.key] = data.value;
    }
  });
  return obj;
}
console.log(groupbyKey(input2));
// should print {a:6, b:1, c:7}
