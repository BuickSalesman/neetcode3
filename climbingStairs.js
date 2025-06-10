class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    let step = 2;
    let waysToReachPenultimateStep = 1;
    let waysToReachAntepenultimateStep = 1;
    let targetStep = n;

    while (step <= targetStep) {
      step++;
      let waysToReachPreantepenultimateStep = waysToReachAntepenultimateStep;
      waysToReachAntepenultimateStep = waysToReachPenultimateStep;
      waysToReachPenultimateStep = waysToReachAntepenultimateStep + waysToReachPreantepenultimateStep;
    }

    return waysToReachPenultimateStep;
  }
}
