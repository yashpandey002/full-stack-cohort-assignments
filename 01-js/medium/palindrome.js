/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    const cleanedStr = str
        .toLowerCase()
        .split(" ")
        .join("")
        .replace(/[^\w\s]/g, "");

    const reversedString = cleanedStr.split("").reverse().join("");
    return reversedString === cleanedStr;
}

isPalindrome("Able, was I ere I saw Elba!");

module.exports = isPalindrome;
