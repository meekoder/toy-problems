// Find the kth to last element of a singly linked list.

const kthToLast = (head, k) => {
    const copy = head;
    const slow = copy;
    const fast = copy;

    for (let i = 1; i < k; i++) {
        fast = fast.next;
    }

    if (!fast) return copy.next;

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow = slow.next.next;
    return copy;
};
