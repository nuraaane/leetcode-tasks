var postorderTraversal = function(root) {
    var result = [];
     postorder(root, result);
     return result;
 };
 var postorder = function (root, result) {
     if (root == null) {
         return root
     } 
     postorder(root.left, result);
     postorder(root.right, result);  
     result.push(root.val);
};
