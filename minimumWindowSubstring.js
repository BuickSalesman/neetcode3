class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    let l = 0;
    let seen = {},
      need = {};

    let res = "";

    let seencount = 0,
      needcount = 0;

    for (const c of t) {
      need[c] = 1 + (need[c] || 0);
      needcount++;
    }

    for (let r = 0; r < s.length; r++) {
      seen[s[r]] = 1 + (seen[s[r]] || 0);
      if (s[r] in need && seen[s[r]] <= need[s[r]]) {
        seencount++;
      }

      while (seencount >= needcount) {
        let window = s.slice(l, r + 1);
        res = !res || window.length < res.length ? window : res;
        seen[s[l]]--;
        if (s[l] in need && seen[s[l]] < need[s[l]]) {
          seencount--;
        }
        l++;
      }
    }
    return res;
  }
}
