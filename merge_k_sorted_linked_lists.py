# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None

        for i in range(1, len(lists)):
            lists[i] = self.mergeTwoLists(lists[i], lists[i - 1])

        return lists[-1]

    def mergeTwoLists(self, l1, l2):

        dummy = ListNode()
        node = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                node.next = l1
                l1 = l1.next
            else:
                node.next = l2
                l2 = l2.next
            node = node.next

        node.next = l1 or l2

        return dummy.next
