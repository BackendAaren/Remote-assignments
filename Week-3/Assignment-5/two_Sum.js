function twoSum(nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
        return arr;
      }
    }
  }
  return "Can not find the combination";
}

console.log(twoSum([2, 7, 11, 15], 9)); // Should print [0, 1]
console.log(twoSum([2, 7, 11, 15], 100)); //Should print Can not find the combination
/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
    */
