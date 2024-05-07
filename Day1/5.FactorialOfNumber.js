//  *Write a function to calculate the factorial of a number using iteration.

//! Approach 1 => TC - O(n) => SC - O(1)
function factorial(num) {
  if (num === 0 || num === 1) return true;
  let factorial = 1;
  for (let i = 2; i < num; i++) {
    factorial *= i;
  }
  return factorial;
}

//! Approach 2 => TC - O(n) => SC - O(n) Recursive
function factorial2(num) {
  if (num === 0 || num === 1) return true;
  return num * factorial2(num - 1);
}
