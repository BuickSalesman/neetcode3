class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    const robLine = (nums) => {
      let prePreMax = 0;
      let preMax = 0;
      let trueMax = 0;

      for (const num of nums) {
        trueMax = Math.max(prePreMax + num, preMax);
        prePreMax = preMax;
        preMax = trueMax;
      }

      return trueMax;
    };

    if (nums.length === 1) {
      return nums[0];
    }

    return Math.max(robLine(nums.slice(0, -1)), robLine(nums.slice(1)));
  }
}
