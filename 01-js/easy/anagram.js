/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const cleanedStr1 = str1.replace(/\s/g, "").toLowerCase();
    const cleanedStr2 = str2.replace(/\s/g, "").toLowerCase();

    if (cleanedStr1.length === cleanedStr2.length) {
        for (let i = 0; i < cleanedStr1.length; i++) {
            if (cleanedStr2.includes(cleanedStr1[i])) {
                continue;
            } else {
                return false;
            }
        }
    } else {
        for (let i = 0; i < cleanedStr1.length; i++) {
            if (cleanedStr2.includes(cleanedStr1[i])) {
                continue;
            } else {
                return false;
            }
        }
        for (let i = 0; i < cleanedStr2.length; i++) {
            if (cleanedStr1.includes(cleanedStr2[i])) {
                continue;
            } else {
                return false;
            }
        }
    }

    return true;
}

module.exports = isAnagram;
