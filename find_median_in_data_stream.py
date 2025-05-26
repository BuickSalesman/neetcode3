class MedianFinder:

    def __init__(self):
        self.large = []  # minheap
        self.small = []  # maxheap

    def addNum(self, num: int) -> None:
        if self.large and num > self.large[0]:
            heapq.heappush(self.large, num)
        else:
            heapq.heappush(self.small, (num * -1))

        if len(self.small) > (len(self.large) + 1):
            heapq.heappush(self.large, (heapq.heappop(self.small) * -1))
        if len(self.large) > (len(self.small) + 1):
            heapq.heappush(self.small, (heapq.heappop(self.large) * -1))

    def findMedian(self) -> float:
        if len(self.small) > len(self.large):
            return (self.small[0] * -1)
        if len(self.large) > len(self.small):
            return self.large[0]
        if len(self.small) == len(self.large):
            return (self.small[0] * -1) + ((self.large[0] - (self.small[0] * -1)) / 2)
