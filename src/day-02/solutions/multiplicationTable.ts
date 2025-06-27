/**
 * @file multiplicationTable.ts
 * @description This module provides a function to print the multiplication table of a given number.
 * @module multiplicationTable
 */

/**
 * Prints the multiplication table of a given number up to a specified limit.
 *
 * @param {number} num - The number for which to print the multiplication table.
 * @param {number} [i = 1] - Optional for for loop but in Recursion method it is required.
 * @returns {void}
 *
 * @example
 * multiplicationTable(5);
 * // Output:
 * // 5 x 1 = 5
 * // 5 x 2 = 10
 * // ...
 * // 5 x 10 = 50
 */

export function multiplicationTable(num: number, i: number = 1): void {

  /**
   * Method 1: By for loop
   */

  // for (let i = 1; i <= 10; i++) {
  //   console.log(`${num} * ${i} = ${num * i}`);
  // }

  /**
  * Method 1: By Recursion
  */

  if (i > 10) return;
  console.log(`${num} * ${i} = ${num * i}`);
  i++;
  multiplicationTable(num, i);
}
