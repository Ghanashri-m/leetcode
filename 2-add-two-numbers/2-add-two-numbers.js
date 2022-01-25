/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
//     let n1 = '', n2 = '';
    
//     while (l1 || l2) {
//         if (l1) {
//             n1 = n1 + l1.val
//             l1 = l1.next;
//         }
        
//         if (l2) {
//             n2 = n2 + l2.val
//             l2 = l2.next;
//         }
//     }
//     console.log(n1.split("").reverse().join(""))
//     console.log(n2.split("").reverse().join(""))
//     let sum = parseInt(n1.split("").reverse().join("")) + parseInt(n2.split("").reverse().join(""))
// console.log(sum);
//     sum = sum.toString().split("").reverse().join("").toString();
//     console.log(sum);
//     let i = 0;
// 	let sentinel = new ListNode(0);
// 	let tail = sentinel;
    
//     while (i < sum.length) {
//         const node = new ListNode(parseInt(sum[i++]));
//         tail.next = node;
//         tail = tail.next;
//     }
    
//     return sentinel.next;
    
    let dummyNode = new ListNode(0);
    
    let newHead = dummyNode;
    
    let carry = 0;
    
    while(l1 || l2){
        let valueList1 = l1 ? l1.val : 0;
        let valueList2 = l2 ? l2.val : 0;
        
        let sum = valueList1 + valueList2 + carry;
        
        carry = Math.floor(sum/10);
        
        sum = sum % 10;
        
        newHead.next  = new ListNode(sum);
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        
        newHead = newHead.next;
    }
    
    if(carry > 0) newHead.next = new ListNode(carry);
    
    return dummyNode.next;
    
};