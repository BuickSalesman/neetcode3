class MedianFinder {
  constructor() {
    this.max = new PriorityQueue((a, b) => b - a);
    this.min = new PriorityQueue((a, b) => a - b);
  }

  /**
   *
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    if (!this.min.isEmpty() && num > this.min.front()) {
      this.min.enqueue(num);
    } else {
      this.max.enqueue(num);
    }

    if (this.max.size() > this.min.size() + 1) {
      this.min.enqueue(this.max.dequeue());
    }
    if (this.min.size() > this.max.size() + 1) {
      this.max.enqueue(this.min.dequeue());
    }
  }

  /**
   * @return {number}
   */
  findMedian() {
    if (this.min.size() > this.max.size()) {
      return this.min.front();
    }
    if (this.max.size() > this.min.size()) {
      return this.max.front();
    }
    if (this.max.size() === this.min.size()) {
      return this.max.front() + (this.min.front() - this.max.front()) / 2;
    }
  }
}
