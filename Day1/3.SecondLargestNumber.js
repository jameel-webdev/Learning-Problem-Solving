//  *Write a function to find the second largest element in an array.
let arr = [23, 65, 8, 87, 4, 67, 34, 98];
let max = arr[0];
let secondMax = arr[1];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    secondMax = max;
    max = arr[i];
  }
}
console.log(secondMax);
