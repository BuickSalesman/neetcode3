class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let result = 0;

    let numSet = new Set(nums);

    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let streak = 1;
        while (numSet.has(num + streak)) {
          streak++;
        }
        result = Math.max(result, streak);
      }
    }
    return result;
  }
}
