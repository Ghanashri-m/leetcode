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
    let map = {num1: 0, num2: 0}
    console.log(map.num1)
    while (l1) {
        map.num1 = BigInt(map.num1.toString() + l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        map.num2 = BigInt(map.num2.toString() + l2.val);
        l2 = l2.next;
    }
    
    // alternate
//     let n1 = '';
// 	let n2 = '';

// 	while (l1 || l2) {
// 		if (l1) {
// 			n1 += l1.val;
// 			l1 = l1.next;
// 		}
// 		if (l2) {
// 			n2 += l2.val;
// 			l2 = l2.next;
// 		}
// 	}

// 	n1 = BigInt(n1);
// 	n2 = BigInt(n2);
    const sum = (map.num1 + map.num2).toString();
    
    let i = 0;
	let sentinel = new ListNode(0);
	let tail = sentinel;
    
    console.log("tail", tail)
    console.log("sentinel", sentinel)
    
    while (i < sum.length) {
		const node = new ListNode(parseInt(sum[i++]));

		tail.next = node;
		// tail = node;
        tail = tail.next;
	}
    console.log("tail", tail)
    console.log("sentinel", sentinel)
    return sentinel.next;
};