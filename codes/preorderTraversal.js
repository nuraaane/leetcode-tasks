var preorderTraversal = function (root) {
    var result = [];
    preorder(root, result);
    return result;
};
var preorder = function (root, result) {
    if (root == null) {
        return root
    } else {
        result.push(root.val);
    }
    preorder(root.left, result);
    preorder(root.right, result);
};
