// *Write a function to find the common elements between two arrays.
function commonElements(arr1, arr2) {
  let obj = {};
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      common[common.length] = arr2[j];
    }
  }
  common = [...new Set(common)];
  return common;
}
// console.log(commonElements([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100]));
