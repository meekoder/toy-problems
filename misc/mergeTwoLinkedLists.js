function mergeTwoLinkedLists(l1, l2) {
  const merged = [];
  const traverse = (l1, l2) => {
    if (!l1 && !l2) {
      return;
    }
    if (!l1 && l2) {
      merged.push(l2.value);
      l2 = l2.next;
      return traverse(l1, l2);
    } else if (l1 && !l2) {
      merged.push(l1.value);
      l1 = l1.next;
      return traverse(l1, l2);
    }
    
    if (l1.value < l2.value) {
      merged.push(l1.value);
      l1 = l1.next;
    } else {
      merged.push(l2.value);
      l2 = l2.next;
    }
    traverse(l1, l2);
  };
  traverse(l1, l2);
  return merged;
}
