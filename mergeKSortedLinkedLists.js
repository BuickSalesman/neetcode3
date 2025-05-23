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
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }

    for (let i = 1; i < lists.length; i++) {
      lists[i] = this.mergeTwoLists(lists[i], lists[i - 1]);
    }

    return lists[lists.length - 1];
  }

  mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let node = dummy;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1;
        l1 = l1.next;
      } else {
        node.next = l2;
        l2 = l2.next;
      }

      node = node.next;
    }

    node.next = l1 || l2;

    return dummy.next;
  }
}
