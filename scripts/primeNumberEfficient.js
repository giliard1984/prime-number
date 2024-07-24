// Concept: A prime number is a positive integer that is only divisible by 1 and itself.
// Example: 2, 3, 5, 7, 11 are the first few prime numbers.

// Approach: This is an efficient approach as users can type large numbers
const isPrime = (n) => {
  // 1 is considered neither prime nor composite
  if (n <= 1) return `1 is neither a prime number nor composite.`;

  // check if n is equal to 2 or 3.
  // the purpose is to skip processing as we know these numbers are prime
  if (n == 2 || n == 3) return `${n} is a prime number.`;

  // check whether n is divisible by 2 or 3
  // if a number is divisible by 2 or 3, which means its remaining value is zero, than it is not a prime number
  if (n % 2 == 0 || n % 3 == 0) return `${n} is NOT a prime number.`;

  // check from 5 to square root of n
  // we are not checking 4 here, because 4 is divisible by 2, which falls under the previous check
  // tterate i by (i+6)
  for (var i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0)
      return `${n} is NOT a prime number.`;
  }
      
  return `${n} is a prime number.`;
};

const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'Enter a positive integer:',
    validate: value => value < 1 ?
      `Only positive integers are allowed. You typed ${value || null}` :
      isPrime(value)
  });

  console.log(response);
})();
