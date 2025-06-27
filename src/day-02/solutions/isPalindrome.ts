/**
 * @file isPalindrome.ts
 * @description This module provides a function to check whether a given string or number is a palindrome.
 * @module isPalindrome
 */

/**
 * Check whether the given input is a palindrome.
 * @param {string | number} input - The input string or number to check.
 * @returns {boolean} Returns true if the input is a palindrome, false otherwise.
 */

//  Definition:
// A palindrome is a sequence of characters that remains unchanged when reversed.
// A palindrome is a word, number, phrase, or sequence that reads the same forward and backward.

export function isPalindrome(input: string | number): boolean {
    let str = input?.toString()?.toLowerCase();
    if (str === str?.split('')?.reverse()?.join('')) return true;
    return false;
}

