class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    let requirements = {};
    for (let i = 0; i < numCourses; i++) {
      requirements[i] = [];
    }

    for (let [course, prerequisite] of prerequisites) {
      requirements[course].push(prerequisite);
    }

    let path = {};

    const dfs = (course) => {
      if (course in path && path[course] === true) {
        return false;
      }

      if (requirements[course].length === 0) {
        return true;
      }

      path[course] = true;
      for (let prerequisite of requirements[course]) {
        if (!dfs(prerequisite)) {
          return false;
        }
      }
      path[course] = false;
      requirements[course] = [];

      return true;
    };

    for (let c = 0; c < numCourses; c++) {
      if (!dfs(c)) {
        return false;
      }
    }

    return true;
  }
}
