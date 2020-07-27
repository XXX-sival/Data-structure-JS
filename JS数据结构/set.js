//集合 不重复性
//ES6新增内置数据结构 Set  WeakSet
// 区别：Set 强引用    WeakSet 弱引用
//用Set实现 差集、并集、交集
var a = new Set([1, 2, 3]);
var b = new Set([2, 3, 4]);

// 并集
var union = new Set([...a, ...b]);//...解构

//交集
var intersect = new Set([...a].filter(x => b.has(x)))//filter过滤器

// 差集
var differentA = new Set([...a].filter(x => !b.has(x)));
var differentB = new Set([...b].filter(x => !a.has(x)));



// ES5原生集合
var Set2 = function () {
    var items = {};

    this.hasValue = function (value) {
        return items.hasOwnProperty(value);
    }

    // 添加元素
    this.add = function (value) {
        if (!this.hasValue(value)) {
            items[value] = value;
            return value;
        }
        return false;
    }

    // 移除元素
    this.remove = function (value) {
        if (this.hasValue(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    // 清空集合
    this.clear = function () {
        items = {}
    }

    //集合大小
    this.size = function () {
        // return Object.keys(items).length;

        var count = 0;
        for (let key in items) {
            if (items.hasOwnProperty(key))
                count++;
        }
        return count;
    }

    // 获取元素
    this.getValue = function () {
        var values = [];
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key])
            }
        }
        return values;
    }

    // 交集
    this.intersection = function (setB) {
        var resultSet = new Set2();
        var arr = this.getValue();
        for (var i = 0; i < arr.length; i++) {
            if (setB.hasValue(arr[i])) {
                resultSet.add(arr[i]);
            }
        }
        return resultSet.getValue();
    }

    // 并集
    this.union = function (setB) {
        var resultSet = new Set2();
        var arr = this.getValue();
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i]);
        }

        var arr = setB.getValue();
        for (var i = 0; i < arr.length; i++) {
            if (!resultSet.hasValue(arr[i])) {
                resultSet.add(arr[i]);
            }
        }
        return resultSet.getValue();
    }

    // 差集
    this.difference = function (setB) {
        var resultSet = new Set2();
        var arr = this.getValue();
        for (var i = 0; i < arr.length; i++) {
            if (!setB.hasValue(arr[i])) {
                resultSet.add(arr[i]);
            }
        }
        return resultSet.getValue();
    }
}

// var A = new Set2();
// var B = new Set2();
// A.add(1);
// A.add(2);
// A.add(3);
// B.add(2);
// B.add(3);
// B.add(4);
