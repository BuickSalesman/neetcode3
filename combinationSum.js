class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */
  combinationSum(nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];

    const dfs = (i, cur, total) => {
      if (total === target) {
        res.push([...cur]);
        return;
      }

      for (let j = i; j < nums.length; j++) {
        if (total > target) {
          return;
        }
        cur.push(nums[j]);
        dfs(j, cur, total + nums[j]);
        cur.pop();
      }
    };

    dfs(0, [], 0);
    return res;
  }
}
