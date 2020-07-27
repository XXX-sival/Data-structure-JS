// 树
// 二叉树

var Tree = function () {

    var Node = function (value) {//节点构造器
        this.value = value;
        this.left = null;
        this.right = null;
    }

    var root = null;

    //插入
    //插入函数
    var insert = function (node, newNode) {
        if (newNode.value < node.value) {//往左走
            if (node.left == null) {
                node.left = newNode;
            } else {
                insert(node.left, newNode);
            }
        } else if (newNode.value > node.value) {//往右走
            if (node.right == null) {
                node.right = newNode;
            } else {
                insert(node.right, newNode);
            }
        }
    }
    this.insert = function (value) {
        var newNode = new Node(value);
        if (root == null) {//空树
            root = newNode;
        } else {
            insert(root, newNode)
        }
    }

    // 遍历
    //遍历函数
    var traverse = function (node, callback) {
        if (node == null) return
        // callback(node.value);//前序遍历 8 2 3 9
        traverse(node.left, callback);
        // callback(node.value);//中序遍历 2 3 8 9
        traverse(node.right, callback);
        callback(node.value);//后序遍历 3 2 9 8
    }
    var print = function (value) {
        console.log(value);
    }
    this.traverse = function () {
        callback = print;
        traverse(root, callback);
    }

    //最小值
    //最小值函数
    var min = function (node) {
        if (node == null) return null;
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    this.min = function () {
        return min(root);
    }

    //最大值
    //最大值函数
    var max = function (node) {
        if (node == null) return null;
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
    this.max = function () {
        return max(root);
    }


    //删除节点
    //查找右侧节点的最小子节点
    var findMinNode = function (node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    //重构函数
    var removeNode = function (node, value) {
        if (node == null) return null;//空树
        if (node.value == value) {//找到了
            if (node.left == null && node.right == null) {//叶节点
                node = null;
                return node;
            }

            //只有一个子节点
            if (node.left == null && node.right) {
                return node.right;
            } else if (node.right == null && node.left) {
                return node.left;
            }

            //有两个子节点
            if (node.right && node.left) {
                var aux = findMinNode(node.right)
                node = aux;
                node.right = removeNode(node.right, node.value)
                return node;
            }
        } else if (value > node.value) {//往右找
            node.right = removeNode(node.right, value);
            return node;
        } else {//往左找
            node.left = removeNode(node.left, value);
            return node;
        }
    }
    this.remove = function (value) {
        removeNode(root, value);
    }



    this.getRoot = function () {
        return root;
    }
}


var t = new Tree();
t.insert(11)
t.insert(8)
t.insert(4)
t.insert(9)
t.insert(3)
t.insert(5)
t.insert(16)
t.insert(13)
t.insert(17)
t.insert(10)



// t.traverse();


