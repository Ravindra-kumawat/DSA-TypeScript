/**
 * @file reverseString.ts
 * @description This module provides a function to reverse a given string.
 * @module reverseString
 * @param {string} str - The input string to be reversed.
 * @return {string} The reversed string.
 */

const reverseString = (str: string) => {
    let reversedString = '';

    /**
     * Method 1: Built-in reverse() method
     */
    //  reversedString = str.split('')?.reverse().join('');

    /**
     * Method 2: Using for loop
     */
    // for(let i= str?.length-1; i >= 0; i--){
    //     reversedString += str[i]
    // }

    /**
     * Method 3: Built-in reduce method
     */

    // reversedString = str?.split('').reduce((pre: string, current: string) => {
    //     console.log('Pre: ', pre);
    //     console.log('current: ', current);
    //     return current + pre;
    // }, '');

    /**
     * Method 4: Two-Pointer (Swapping) Technique
     */

    // let s = [...str];
    // let left = 0;
    // let right = s?.length - 1;

    // while (left < right) {
    //     console.log('Left: ', s[left]);
    //     console.log('Right: ', s[right]);

    //     // Swap using a temporary variable
    //     let temp = s[left];
    //     s[left] = s[right];
    //     s[right] = temp;

    //     left++;
    //     right--;
    //     console.log('Hello: ', s)
    // }
    // reversedString = s.join('');

    /**
     * Method 5: Recursion
     */
    if (str === '') return '';
    reversedString = reverseString(str?.slice(1)) + str[0];

    // Final Return
    return reversedString;
}

// console.log(reverseString('Hello'));
export default reverseString;
