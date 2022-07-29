var isSymmetric=function(root){
    let result=true;
    function mirror(node1,node2){
        if(!node1&&!node2){
            return;
        }
        if(!node1||!node2||node1.val!==node2.val){
            result=false;
            return;     
        }
        mirror(node1.left,node2.right);
        mirror(node1.right,node2.left);
    }
    mirror(root,root);
    return result;
}
