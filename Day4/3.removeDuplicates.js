// *Write a function to remove duplicates from an array.
//!Approach 1

function removeDup1(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  let newArr = [];
  for (let key in obj) {
    newArr[newArr.length] = +key;
  }
  return newArr;
}
// console.log(removeDup1([1, 5, 10, 20, 40, 80, 6, 7, 20, 80, 100]));

//!Approach 2 - without using extra memory/variable

function removeDup2(arr) {
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] != null) {
      for (let anotherInd = ind + 1; anotherInd < arr.length; anotherInd++) {
        if (arr[ind] === arr[anotherInd]) {
          arr[anotherInd] = null;
        }
      }
    }
  }
  let slowInd = 0;
  for (let fastInd = 0; fastInd < arr.length; fastInd++) {
    if (arr[fastInd] != null) {
      arr[slowInd++] = arr[fastInd];
    }
  }
  arr.length = slowInd;
  return arr;
}
// console.log(removeDup2([1, 5, 10, 20, 40, 80, 6, 7, 20, 80, 100]));
