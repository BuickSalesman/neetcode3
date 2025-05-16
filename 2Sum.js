class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let seen = {};

    for (const [i, n] of nums.entries()) {
      let diff = target - n;
      if (diff in seen) {
        return [seen[diff], i];
      }
      seen[n] = i;
    }
  }
}
