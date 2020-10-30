"use strict";
// 布尔类型
var flage = true;
// 数字类型
var a = 123;
console.log(a);
// a=false 赋值其他类型，报错
a = 12.3;
console.log(a);
//  字符串类型
var sr = "this is ts";
console.log(sr);
//  数组类型,TS 有两种方法定义数组
var arr = [1, 3, 4]; // 只能放 number 类型
console.log(arr);
// 第二种方法定义数组
var arr2 = ['php', 'js', 'html',];
console.log(arr2);
// 第三种定义数组 （任意类型元素）
var arr5 = ["dede", 213, false];
// 元组类型 （tupe）,属于数组的一种。用于指定数组里面值的类型
var arr3 = ["31", 323, false];
console.log(arr3);
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 3] = "red";
    Color[Color["blue"] = 4] = "blue";
    Color[Color["orange"] = 5] = "orange";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c); // 4 如果不在枚举中设置值，则默认是索引值
// 任意类型 (any)，用在Object 类型上，否则会报错
var body = document.body;
body.innerHTML = "ddd";
var anyd = 323;
anyd = "string";
console.log(anyd);
// 其他类型 undefined null ，联合类型语法
var num;
console.log(num);
// 一个元素可能是 number ，可能是 null ,可能是 undefined
var num2;
num2 = "323";
num2 = "xec";
// void 类型，表示没有任何类型，一般般用于定义方法的时候没有返回值
// 表示这个方法没有返回任何类型
function run2() {
    console.log("run");
}
run2();
//其他类型：nerver 类型（包括null和undefined）的子类型，代表从不会出现的值
// nerver 的变量只能被nerver类型所赋值
var a23;
a23 = (function () {
    throw new Error('错误');
})();
