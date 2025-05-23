/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let front = head;
    let back = head;

    while (n > 0) {
      front = front.next;
      n--;
    }

    if (front === null) {
      return head.next;
    }

    while (front.next !== null) {
      front = front.next;
      back = back.next;
    }

    back.next = back.next.next;
    return head;
  }
}
