class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    let prevMax = 0;
    let prevPrevMax = 0;
    let trueMax;

    for (let i = 0; i < nums.length; i++) {
      trueMax = Math.max(nums[i] + prevMax, prevPrevMax);
      prevMax = prevPrevMax;
      prevPrevMax = trueMax;
    }

    return trueMax;
  }
}
