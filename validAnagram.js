class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    let sHash = {},
      tHash = {};

    for (const sChar of s) {
      sHash[sChar] = 1 + (sHash[sChar] || 0);
    }

    for (const tChar of t) {
      tHash[tChar] = 1 + (tHash[tChar] || 0);
    }

    for (const key in sHash) {
      if (sHash[key] !== tHash[key]) {
        return false;
      }
    }
    return true;
  }
}
