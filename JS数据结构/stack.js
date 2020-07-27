// 栈-一种后进先出(FILO)的数据结构

var Stack = function () {
    var items = [];

    // 往栈顶添加元素
    this.push = function (element) {
        items.push(element);
    }

    // 移除栈顶元素
    this.pop = function () {
        return items.pop();
    }

    // 检查栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    }

    // 检查栈是否为空
    this.isEmpty = function () {
        return items.length == 0;
    }

    //检查栈
    this.getItems = function () {
        return items;
    }

    // 清除栈
    this.clear = function () {
        items = [];
    }

    //检查栈的长度
    this.size = function () {
        return items.length;
    }
}



// 十进制转二进制
var tenToTwo = function (num) {
    var quotient = num;//商
    var remainder = 0;//余数
    var stack = new Stack;//保存余数的数组对象
    var string = '';//用空字符串把返回数连起来
    while (quotient > 0) {
        remainder = quotient % 2;
        stack.push(remainder);
        quotient = Math.floor(quotient / 2);
    };

    // 取出
    while (!stack.isEmpty()) {
        string += stack.pop();
    }
    return string;
}


// 十进制转二进制(纯数组版)
var tenToTwo2 = function (num) {
    var quotient = num;//商
    var remainder = 0;//余数
    var remainderArr = [];//保存余数的数组对象
    var string = '';//用空字符串把返回数连起来
    var empty = false;
    while (quotient > 0) {
        remainder = quotient % 2;
        remainderArr.push(remainder);
        quotient = Math.floor(quotient / 2);
    };

    // 取出
    while (!empty) {
        string += remainderArr.pop();
        if (remainderArr.length == 0) empty = true;
    }
    return string;
}



// 十进制转二进制(数组方法版)
var tenToTwo3 = function (num) {
    var quotient = num;//商
    var remainder = 0;//余数
    var remainderArr = [];//保存余数的数组对象
    var empty = false;
    var result = [];
    var a = 0;
    while (quotient > 0) {
        remainder = quotient % 2;
        remainderArr.push(remainder);
        quotient = Math.floor(quotient / 2);
    };

    // 取出
    while (!empty) {
        result.push(remainderArr.pop());
        if (remainderArr.length == 0) empty = true;
    }
    return result.join('');
}



// 栈和函数
// 入栈顺序：fun2先入栈 fun1后入栈
// 出栈顺序：fun1先出栈 fun2后出栈
/*
fun1 = function () {
    console.log(1)
}

fun2 = function () {
    fun1();
    console.log(2);
}

fun2();
*/