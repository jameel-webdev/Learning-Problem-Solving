//  *Write a function to find the nth Fibonacci number using iteration.
//! Approach 1 => TC - O(n) => SC - O(n)
let fibonacci = [0, 1];
let n = 15;
for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci[n - 1]);

//! Approach 2 => TC - O(n) => SC - O(1)
let prev = 0;
let current = 1;
for (let i = 2; i < n; i++) {
  let next = prev + current;
  prev = current;
  current = next;
}
console.log(current);

//! Approach 3 => TC - O(n) => SC - O(1)
let previous = 0;
let curr = 1;
for (let i = 2; i < n; i++) {
  curr = previous + curr;
  previous = curr - previous;
}
console.log(current);
