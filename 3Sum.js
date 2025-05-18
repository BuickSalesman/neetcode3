class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
      let l = i + 1;
      let r = nums.length - 1;
      let target = -nums[i];

      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }

      if (target < 0) {
        break;
      }

      while (l < r) {
        if (nums[l] + nums[r] === target) {
          res.push([nums[i], nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) {
            l++;
          }
          while (l < r && nums[r] === nums[r + 1]) {
            r--;
          }
        } else if (nums[l] + nums[r] < target) {
          l++;
        } else if (nums[l] + nums[r] > target) {
          r--;
        }
      }
    }

    return res;
  }
}
