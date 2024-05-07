//  *Write a function to find the first and second largest element in an array.
//! Approach 1
let arr = [23, 65, 8, 87, 4, 67, 34, 98];
let max = arr[0];
let secondMax = arr[1];
let i = 0;
while (max <= secondMax) {
  max = secondMax;
  secondMax = arr[++i];
}
for (; i < arr.length; i++) {
  if (max < arr[i]) {
    secondMax = max;
    max = arr[i];
  }
  if (max !== arr[i] && secondMax < arr[i]) {
    secondMax = arr[i];
  }
}
console.log(max, secondMax);

//! Approach 2
let maxN = arr[0];
let secondMaxN = -Infinity;
for (let i = 1; i < arr.length; i++) {
  if (maxN < arr[i]) {
    secondMaxN = maxN;
    maxN = arr[i];
  }
  if (maxN !== arr[i] && secondMaxN < arr[i]) {
    secondMax = arr[i];
  }
}
console.log(maxN, secondMaxN);
