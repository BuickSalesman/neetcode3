class Solution:
    def climbStairs(self, n: int) -> int:
        target_step = n
        step = 2
        penultimate_step = 1
        antepenultimate_step = 1

        while step <= target_step:
            step += 1
            preantepenultimate_step = antepenultimate_step
            antepenultimate_step = penultimate_step
            penultimate_step = preantepenultimate_step + antepenultimate_step

        return penultimate_step
