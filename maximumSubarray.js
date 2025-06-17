class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let curSum = nums[0];
    let maxSum = curSum;

    for (let i = 1; i < nums.length; i++) {
      curSum = Math.max(nums[i], curSum + nums[i]);
      maxSum = Math.max(maxSum, curSum);
    }

    return maxSum;
  }
}
