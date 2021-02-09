var hasCycle = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    
    while (fastPointer) {
        slowPointer = slowPointer.next;
        if (!fastPointer.next || !fastPointer.next.next) {
            return false;
        }
        fastPointer = fastPointer.next.next;
        if (fastPointer === slowPointer) {
            return true;
        };
    }
    return false;
};
