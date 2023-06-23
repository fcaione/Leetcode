// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let dict = {}

  for (let i = 0; i < magazine.length; i++) {
      if (dict[magazine[i]]) {
          dict[magazine[i]] += 1
      } else {
          dict[magazine[i]] = 1
      }
  }

  for (let i = 0; i < ransomNote.length; i++) {
      if (!dict[ransomNote[i]] || dict[ransomNote[i]] === 0) {
          return false
      } else {
          dict[ransomNote[i]] -= 1
      }
  }

  return true
};