// *Write a function that performs a linear search on an array.
function linearSearch(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return 1;
    }
  }
  return -1;
}
console.log(linearSearch([12, 35, 24, 34, 56, 78, 12, 45], 35));
