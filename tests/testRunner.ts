


/**
 * Simple test runner
 * @param desc - Test description
 * @param fn - Test function
 */
const run = (desc: string, fn: () => void): void => {
  try {
    fn();
    console.log(`✅ ${desc}`);
  } catch (err) {
    console.error(`❌ ${desc}`);
    console.error(err);
  }
};

// Example:
// import reverseString from "../src/day-01/solutions/reverseString";
// run("Reverse string should work", () => {
//   const result = reverseString("hello");
//   if (result !== "olleh") throw new Error("Test failed");
// });

// import {isEven} from "../src/day-02/solutions/checkEvenNumber";
// run("isEven function should work", () => {
//   const result = isEven(28);
//   if (result === false) throw new Error("Test failed");
// });

import { isPalindrome } from "../src/day-02/solutions/isPalindrome";

run("isPalindrome should return false for 'madiam'", () => {
  const result = isPalindrome('madiam');
  if (result !== false) throw new Error(`Expected false but got ${result}`);
});

run("isPalindrome should return true for '1madaM1'", () => {
  const result = isPalindrome('1madaM1');
  if (result !== true) throw new Error(`Expected true but got ${result}`);
});