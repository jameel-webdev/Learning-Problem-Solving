// *Write a function that performs a binary search on a sorted array.
function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === searchValue) {
      return mid;
    }
    if (arr[mid] < searchValue) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
