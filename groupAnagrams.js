class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let res = {};

    for (const s of strs) {
      let count = new Array(26).fill(0);
      for (const c of s) {
        count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
      }
      const uniqueKey = count.join(",");
      if (!(uniqueKey in res)) {
        res[uniqueKey] = [];
      }
      res[uniqueKey].push(s);
    }
    return Object.values(res);
  }
}
