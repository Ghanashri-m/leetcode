/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    //base case or edge case
    if(head == null || head.next == null)
        return true;
    
    //step1 -> find middle
    let mid = getMid(head);

    //step2 -> reverse ll after mid
    let temp = mid.next;
    mid.next = reverse(temp);
    
    //step3 compare both halves
    let head1 = head;
    let head2 = mid.next;
    
    while(head2 != null){
        if(head1.val != head2.val){
            return false;
        }
        head1 = head1.next;
        head2 = head2.next;
    }
    
    //step4 repeat step 2 for don't manuplate original array
    temp = mid.next;
    mid.next = reverse(temp);
    
    return true;
};

function getMid(head){
    let slow = head;
    let fast = head.next;

    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

function reverse(head){
    let curr = head;
    let prev = null;
    let next = null;
    while(curr != null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    }
    return prev;
}