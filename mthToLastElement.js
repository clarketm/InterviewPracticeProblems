class ListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(items) {
    let head = new ListNode(0);
    let curr = head;
    let size = 0;

    for (let i = 0; i < items.length; i++) {
      curr.next = new ListNode(items[i]);
      curr = curr.next;
      size++;
    }

    this.size = size;
    this.head = head.next;
  }
}

/**
 *
 * M-th to Last Element
 *
 * @param {number} m
 * @param {number[]} list
 * @return {number}
 */

function mthToLastElement(m, list) {
  let l = new LinkedList(list);
  let curr = l.head;

  let i = 0;
  let result = "NIL";

  while (curr !== null) {
    if (l.size - i === m) result = curr.val;
    curr = curr.next;
    i++;
  }

  return result;
}

// Test
if (require.main === module) {
  console.log(mthToLastElement(3, [1, 6, 2, 80, 22, 34, 2]));
  console.log(mthToLastElement(1, [1, 6, 3, 80, 22, 34, 2]));
  console.log(mthToLastElement(4, [1, 6, 3, 80, 22, 34, 2]));
  console.log(mthToLastElement(8, [3, 2, 4, 1]));
}

module.exports = {
  mthToLastElement
};
