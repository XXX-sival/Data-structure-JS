// 队列-一种先进先出(FIFO)的数据结构
var Queue = function () {
    var items = [];

    // 入队
    this.enqueue = function (element) {
        items.push(element);
    }
    // 出队
    this.dequeue = function () {
        return items.shift();
    }
    // 获取队列头
    this.front = function () {
        return items[0];
    }
    //获取队列长度
    this.size = function () {
        return items.length;
    }
    // 判断队列是否为空
    this.isEmpty = function () {
        return items.length == 0;
    }
    // 获取队列
    this.getQueue = function () {
        return items;
    }
    // 清空队列
    this.clear = function () {
        items = [];
    }
}



// 约瑟夫环问题  循环当队列头
var joseph = function (names, number) {
    var queue = new Queue();
    for (var i = 0; i < names.length; i++) {
        queue.enqueue(names[i])
    }//录入参加人员
    var out;
    while (queue.size() > 2) {
        for (var i = 0; i < number - 1; i++) {
            queue.enqueue(queue.dequeue())
        }//循环当队列头
        out = queue.dequeue();
        console.log('淘汰 ' + out)
    }
    console.log(queue.getQueue()[0] + '\t' + queue.getQueue()[1])
}
var list = ['a', 'b', 'c', 'd', 'e', 'f'];
var listJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '16:Joseph', 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, '31:Friend', 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
// joseph(listJ, 3)



// 优先队列
var PriorityQueue = function () {
    var oldQueue = [];

    //辅助类: 对象构造器
    var Member = function (name, priority) {
        this.name = name;
        this.priority = priority;
    }
    this.enqueue = function (name, priority) {
        var newMember = new Member(name, priority);

        var empty = true;
        for (var i = 0; i < oldQueue.length; i++) {
            if (newMember.priority > oldQueue[i].priority) {
                oldQueue.splice(i, 0, newMember);
                empty = false;
                break;
            }
        }
        if (empty) {
            oldQueue.push(newMember);
        }
    }
    this.getPriorityQueue = function () {
        return oldQueue;
    }
}

// var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// var num = [1, 2, 0, 8, 4, 5, 3, 9]
// var a = new PriorityQueue();
// for (var i = 0; i < list.length; i++) {
//     a.enqueue(list[i], num[i])
// }
// console.log(a.getPriorityQueue());
