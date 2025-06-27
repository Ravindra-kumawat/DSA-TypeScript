/**
 * @file checkEvenNumber.ts
 * @description This module provides a function to Check whether a given number is even or oddg.
 * @module isEven
 * @param {number} num - The input Number to be Even Or Odd.
 * @return {boolean} Given a number n, check whether it is even or odd. Return true for even and false for odd.
 */

export function isEven(num: number): boolean {

    /**
     * Method 1: By Finding the Remainder
     */

    // let remainder = num % 2;
    // console.log(remainder);
    // if (remainder === 0) return true;
    // return false

    // ***************************//

    /**
     * Method 2: Using Bitwise AND Operator
     */

    if ((num & 1) === 0) return true;
    return false;

}