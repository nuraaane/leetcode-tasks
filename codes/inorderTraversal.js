var inorderTraversal = function (root) {
    var result = [];
    inorder(root, result);
    return result;
};

var inorder = function (root, result) {
    if (root == null) {
        return;
    }
    if (root.left) {
        inorder(root.left, result);
    }
    result.push(root.val);
    if (root.right) {
        inorder(root.right, result);
    }
};
