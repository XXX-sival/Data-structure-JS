// 链表
var LinkedList = function () {
    var head = null;
    var length = 0;

    //辅助类 节点构造器
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    // 尾部插入节点
    this.append = function (element) {
        var node = new Node(element);
        if (head == null) {//判断链表头是否为空
            head = node;
        } else {
            var current = head;
            while (current.next) {//从链表头开始顺着链表查找链表尾
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    //定点插入节点
    this.insert = function (element, position) {
        var node = new Node(element);
        var index = 0;
        var previous = null;
        if (position > -1 && position < length) {//容错 索引位恰好比length小一位，尾部定点可用
            var current = head;
            if (position == 0) {//头插入的情况
                head = node;
                head.next = current;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
        }
    }

    //定点移除节点
    this.removeAt = function (position) {
        var previous = null;
        var current = head;
        var index = 0;
        if (position > -1 && position < length) {
            if (position == 0) {
                head = current.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;
            current.next = null;
            return current;
        }
        return null;
    }

    //根据元素返回节点位置
    this.indexOf = function (element) {
        var index = 0;
        current = head;
        while (current) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    //根据位置返回元素
    this.element = function (position) {
        var index = 0;
        var current = head;
        if (position > -1 && position < length) {
            while (index < position) {
                current = current.next;
                index++;
            }
            return current;
        }
        return null;
    }

    //根据元素移除节点
    this.remove = function (element) {
        return this.removeAt(this.indexOf(element));
    }

    // 检查链表是否为空
    this.isEmpty = function () {
        return length == 0;
    }

    // 链表长度
    this.length = function () {
        return length;

    }

    this.getHead = function () {//返回链表头
        return head;
    }

}


var l = new LinkedList();
l.append(10);
l.append(1);
l.append(20);
l.append(2);
l.append(3);
l.append(4);
// l.insert(6, 0);
// console.log(l.getHead())
// l.removeAt(0);
// console.log(l.getHead())
// l.removeAt(1);
// console.log(l.getHead())


// l.insert(6, 18);

// console.log(l.getHead()




// 用双向循环链表写约瑟夫问题
var LinkedList2 = function () {
    var head = null;
    var tail = null;
    var length = 0;

    var Node = function (element) {
        this.element = element;
        this.next = null;
        this.last = null;
    }

    //尾部插入
    this.append = function (element) {
        var node = new Node(element);
        var current = head;
        var index = 0;
        if (length == 0) {
            head = node;
            tail = node;
        } else {
            for (var i = length - 1; i > 0; i--) {
                current = current.next;
            }
            current.next = node;
            node.last = current;
            tail = node;
            head.last = tail;
            tail.next = head;
        }
        length++;
    }

    //定点插入
    this.insert = function (element, position) {
        if (position > -1 && position < length) {
            var index = 0;
            var current = head;
            var node = new Node(element);
            while (index < position) {
                current = current.next;
                index++;
            }
            node.next = current;
            node.last = current.last;
            current.last.next = node;
            current.last = node;
            length++;
        }
    }

    // 位置查找
    this.indexOf = function (element) {
        var index = 0;
        var current = head;
        while (current) {
            if (element === current.element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    //元素查找
    this.element = function (position) {
        if (position > -1 && position < length) {
            var current = head;
            var index = 0;
            while (index < position) {
                current = current.next;
                index++;
            }
            return current.element;
        }
        return false;
    }

    //定点删除
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            var current = head;
            var index = 0;
            if (position == 0) {
                head = head.next;
            }
            while (index < position) {
                current = current.next;
                index++;
            }
            current.next.last = current.last;
            current.last.next = current.next;
            length--;
            // current.next = null;
            // current.last = null;
            return current;
        }
        return null;
    }

    // 元素删除
    this.remove = function (element) {
        return this.removeAt(this.indexOf(element));
    }

    // 查看长度
    this.size = function () {
        return length;
    }

    //是否为空
    this.isEmpty = function () {
        return length == 0;
    }

    //看头
    this.getHead = function () {
        return head;
    }

    //看尾
    this.getTail = function () {
        return tail;
    }
}


// var a = new LinkedList2();
// a.append(1);
// a.append(2);
// a.append(3);
// a.append(4);
// a.insert(6, 1);

var joseph = function (names, number) {
    var j = new LinkedList2();
    for (var i = 0; i < names.length; i++) {
        j.append(names[i]);
    }
    var out = j.getHead();
    while (j.size() > 2) {
        for (var i = 0; i < number; i++) {
            out = out.next
        }
        console.log(j.remove(out.last.element).element + ' out')
        // console.log(1)
    }
    console.log(out.element + '\t' + out.next.element);
    // console.log(1)


}
var list = ['a', 'b', 'c', 'd', 'e', 'f']
// joseph(list, 3);
var listJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '16:Joseph', 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, '31:Friend', 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
joseph(listJ, 3)