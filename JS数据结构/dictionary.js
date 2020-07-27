//字典
var Dictionary = function () {
    var items = {};

    this.has = function (key) {
        // return items.hasOwnProperty(key);
        return key in items;
    }

    this.set = function (key, value) {
        items[key] = value;
    }

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function (key) {
        if (this.has(key)) {
            return items[key];
        }
        return false;
    }

    this.getItems = function () {
        return items;
    }

    this.getKeys = function () {
        return Object.keys(items);
    }
}

// var d = new Dictionary();
// d.set(1, 'a')
// d.set(2, 'b')
// d.set(3, 'c')
// d.set(4, 'd')



//哈希表
var HashTable = function () {
    var items = [];

    //散列函数
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
        }
        return hash % 37;
    }

    //更好的散列函数，解决哈希表传统问题
    var djb2HashCode = function (key) {
        var hash = 5381;
        for (i = 0; i < key.length; i++) {
            hash = hash * 33 + key[i].charCodeAt();
        }
        return hash % 1013;
    }

    //检查散列是否存在
    this.has = function (key) {
        if (items[loseloseHashCode(key)]) {
            return true;
        } return false;
    }

    //节点构造器，将键和值打包成对象放进链表的一个节点里
    var Node = function (key, value) {
        this.key = key;
        this.value = value;
    }
    this.put = function (key, value) {//用链表解决哈希表冲突问题
        var position = loseloseHashCode(key);
        if (items[position]) {
            items[position].append(new Node(key, value));
        } else {
            var l = new LinkedList()
            items[position] = l;
            items[position].append(new Node(key, value));
        }
        return position;
    }

    this.remove = function (key) {
        var position = loseloseHashCode(key);
        if (items[position]) {
            var current = items[position].getHead();
            while (current) {
                if (current.element.key == key) {
                    items[position].remove(current.element)
                    if (items[position].isEmpty()) {
                        items[position] = undefined;
                    }
                    return current.element.value;
                }
                previous = current;
                current = current.next;
            }
        }
        return false;
    }

    this.get = function (key) {
        var position = loseloseHashCode(key);
        if (items[position]) {
            //链表线性查找
            var current = items[position].getHead();
            while (current) {
                if (current.element.key == key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    this.getItems = function () {
        return items;
    }
}




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






var h = new HashTable();
h.put('Jobs', 'Jobs@qq.com')
h.put('BOB', 'BOB@qq.com')
h.put('Rosic', 'Rosic@qq.com')
h.put('Tim', 'Tim@qq.com')
h.put('Ana', 'Ana@qq.com')
h.put('Donnie', 'Donnie@qq.com')
