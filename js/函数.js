"use strict";
// ts 中定义函数的方法
//1. 函数声明法
function run3() {
    return "run";
}
// 2. 匿名函数
var fun2 = function () {
    return 123;
};
console.log(fun2());
// ts 中定义方法传参:参数也可以规定类型
function getInfo(name, age) {
    return name + age;
}
// 没有返回值的方法
function funxx() {
    console.log("no return");
}
// 方法可选参数，ts 中形参和实参必须一致，否则编译不通过。如果不一致，可以配置可选参数
// 可选参数必须定义到方法的最后面
function getInfo2(name, age) {
    if (age) {
        return "there is no age";
    }
    else {
        return name + age;
    }
}
getInfo2("dd");
//  getInfo("ede") // 编译会报错
// 默认参数,参数循序不影响
function fd(a, d) {
    if (a === void 0) { a = "12"; }
    if (d === void 0) { d = 44; }
    return a + d;
}
// 剩余参数
function sun() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
        var n = result_1[_a];
        sum + n;
    }
    return sum;
}
function css(config, age) {
    return 1233;
}
console.log(css(1323, 123));
