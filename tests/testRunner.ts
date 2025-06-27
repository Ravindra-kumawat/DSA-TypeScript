


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

import {isEven} from "../src/day-02/solutions/checkEvenNumber";
run("isEven function should work", () => {
  const result = isEven(28);
  if (result === false) throw new Error("Test failed");
});
