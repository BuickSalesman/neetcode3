# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        front = back = head

        while n > 0:
            front = front.next
            n -= 1

        if not front:
            return head.next

        while front.next:
            front = front.next
            back = back.next

        back.next = back.next.next
        return head
