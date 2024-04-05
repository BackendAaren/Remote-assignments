function binarySearchPosition(arr, target) {
  let left = 0;
  let right = arr.length - 1; //右邊設置的位置為arr.length-1的原因是陣列指標為0開始若不設置可能導致無窮迴圈或是輸出錯誤
  while (left <= right) {
    //當left小於0等於0時持續進行。需設置=的原因是最後可能為相同數需進行最後一次的比較
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      //若target剛好為mid直接返回
      return mid;
    } else if (target > mid) {
      //若target大於mid的左半邊與mid都不用看
      left = mid + 1; //left設置為mid+1
    } else {
      right = mid - 1; //若target小於mid則right設置為mid-1
    }
  }
  return -1;
}
//Binary search為一排序好的數列
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 4)); // should print -1
