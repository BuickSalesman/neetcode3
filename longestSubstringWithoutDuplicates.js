class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let hash = {};
    let len = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      hash[s[r]] = 1 + (hash[s[r]] || 0);
      while (hash[s[r]] > 1) {
        hash[s[l]]--;
        l++;
      }
      len = Math.max(len, r - l + 1);
    }
    return len;
  }
}
