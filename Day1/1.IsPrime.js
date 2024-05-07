//  *Write a function to check if a given number is prime.

function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let fact = 3; fact * fact <= num; fact += 2) {
    if (num % fact === 0) {
      return false;
    }
    return true;
  }
}

// *console.log(isPrime(2)); //true
// !console.log(isPrime(101)); //false
// *console.log(isPrime(234567)); //true
// !console.log(isPrime(1000000007)); //false
