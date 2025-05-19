class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let res = 0;
    let maxF = 0;
    let l = 0;
    let seen = {};

    for (let r = 0; r < s.length; r++) {
      seen[s[r]] = (seen[s[r]] || 0) + 1;
      maxF = Math.max(maxF, seen[s[r]]);
      while (r - l + 1 - maxF > k) {
        seen[s[l]]--;
        l++;
      }
      res = Math.max(res, r - l + 1);
    }

    return res;
  }
}
