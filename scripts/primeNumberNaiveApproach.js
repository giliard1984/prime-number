// Concept: A prime number is a positive integer that is only divisible by 1 and itself.
// Example: 2, 3, 5, 7, 11 are the first few prime numbers.

// Approach: This is a direct approach, where we check if the mod is 0,
// which means a number is divisible by "i", and the remainder is zero.
const isPrime = (n) => {
  // 1 is considered neither prime nor composite
  if (n <= 1) return `1 is neither a prime number nor composite.`;

  // check from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return `${n} is NOT a prime number.`;
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
