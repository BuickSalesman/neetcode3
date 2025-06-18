class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    let res = [];
    let inserted = false;

    for (const interval of intervals) {
      if (interval[1] < newInterval[0]) {
        res.push(interval);
      } else if (interval[0] > newInterval[1]) {
        if (inserted === false) {
          res.push(newInterval);
          inserted = true;
        }
        res.push(interval);
      } else if (newInterval[1] >= interval[0]) {
        newInterval[0] = Math.min(newInterval[0], interval[0]);
        newInterval[1] = Math.max(newInterval[1], interval[1]);
      }
    }

    if (inserted === false) {
      res.push(newInterval);
    }

    return res;
  }
}
