//图

var Graph = function () {
    //存顶点
    var vertices = [];
    //存边
    var adjList = {};

    // 添加顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList[v] = [];
    }

    //添加边
    this.addEdge = function (a, b) {
        adjList[a].push(b);
        adjList[b].push(a);
    }


    //广度优先算法 优势：容易找最短路径
    //标识
    var initColor = function () {
        var color = {};
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }
    //队列
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
    var bfs = function (v) {
        //初始化
        var distance = {};//存距离
        var pred = {};//存回溯点
        var color = initColor();
        var queue = new Queue();
        for (var i = 0; i < vertices.length; i++) {
            distance[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        queue.enqueue(v);//入列
        while (!queue.isEmpty()) {
            var now = queue.dequeue();
            color[now] = 'blake';
            for (var i = 0; i < adjList[now].length; i++) {
                var w = adjList[now][i];
                if (color[w] == 'white') {
                    queue.enqueue(w);
                    color[w] = 'grey';

                    //设置回溯点
                    pred[w] = now;
                    distance[w] = distance[now] + 1;
                }
            }
        }
        // console.log(distance);
        // console.log(pred);
        return pred;
    }
    //最短路径
    this.shortestPath = function (from, to) {
        var pred = bfs(from);
        var v = pred[to];
        var arr = [to];
        while (v != null) {
            arr.push(v);
            v = pred[v];
        }
        for (var i = 0; i < arr.length; i++) {
            console.log(arr.pop());//无法删除最前面的元素？？？
        }
        console.log(arr.shift())
    }


    //深度优先算法
    var dfsAux = function (u, color, callback) {
        color[u] = 'grey';
        for (var i = 0; i < adjList[u].length; i++) {
            var w = adjList[u][i];
            if (color[w] == 'white') {
                dfsAux(w, color, callback);
            }
        }
        color[u] = 'black';
        if (callback) {
            callback(u);
        }
    }
    this.dfs = function (v, callback) {
        var color = initColor();
        dfsAux(v, color, callback);
    }



    //打印整个图
    this.printAll = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s = vertices[i] + ' => ';
            for (var j = 0; j < adjList[vertices[i]].length; j++) {
                s += adjList[vertices[i]][j] + ' '
            }
            s += '\n';
            console.log(s);
        }
    }
}

var g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('B', 'E')
g.addEdge('B', 'F')

g.dfs('A', function (e) { console.log(e) })




