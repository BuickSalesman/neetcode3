class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    let dp = [];
    dp.push(nums[0]);
    let lis = 1;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > dp[dp.length - 1]) {
        dp.push(nums[i]);
        lis++;
        continue;
      }

      let l = 0;
      let r = dp.length - 1;

      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (dp[m] < nums[i]) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      dp[l] = nums[i];
    }
    return lis;
  }
}
