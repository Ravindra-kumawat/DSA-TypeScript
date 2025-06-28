/**
 * @file sumOfNaturalNumbers.ts
 * @description This module provides a function to calculate the sum of the first n natural numbers.
 * @module sumOfNaturalNumbers
 */

/**
 * Calculates the sum of the first `n` natural numbers.
 *
 * @param {number} n - A positive integer representing how many natural numbers to sum.
 * @returns {number} The sum of the first n natural numbers.
 *
 * @example
 * sumOfNaturalNumbers(5); // 1 + 2 + 3 + 4 + 5 = 15
 */
export function sumOfNaturalNumbers(n: number): number {

    /**
     * Method 1: Using Mathematical formula
     */

    // let sum = (n * (n + 1) / 2);
    // console.log(sum);
    // return sum;

    /**
     * Method 2: Using for loop
     */
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += i;
    // }
    // console.log(sum);
    // return sum;

    /**
     * Method 3: Recursion
     */

    // if(n <= 1) return n;
    // return (n + sumOfNaturalNumbers(n-1));

    /**
     * Method 4: Using While loop
     */
    let sum = 0;
    while (n >= 1) {
        sum += n;
        n--;

    }
    return sum;

}
console.log(sumOfNaturalNumbers(5));