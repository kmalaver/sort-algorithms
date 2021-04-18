export function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
}

export function focusNode(node) {
  node.classList.add('focused');

  return () => {
    node.classList.remove('focused');
  };
}

export function finishNode(node) {
  node.classList.add('finish');
}
