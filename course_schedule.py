class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        requirements = {i: [] for i in range(numCourses)}

        for course, neighbor in prerequisites:
            requirements[course].append(neighbor)

        path = {}

        def dfs(course):
            if course in path and path[course] == True:
                return False
            if requirements[course] == []:
                return True

            path[course] = True
            for neighbor in requirements[course]:
                if not dfs(neighbor):
                    return False
            path[course] = False
            requirements[course] = []

            return True

        for c in range(numCourses):
            if not dfs(c):
                return False

        return True
