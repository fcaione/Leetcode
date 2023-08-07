// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// HASH

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let numberHash = {}

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in numberHash) {
          return true
      }
      numberHash[nums[i]] = true
  } 

  return false
};

//TWO POINTER
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b)=>{return a-b})
  let l = 0
  let r = 1

  while (r < nums.length) {
      if (nums[l] === nums[r]) {
          return true
      } else {
          l++
          r++
      }
  }
  return false
};