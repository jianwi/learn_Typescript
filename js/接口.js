"use strict";
// ts 中的接口
//   属性类接口
//   函数类型接口
//   可索引接口
//   类类型接口
//   接口扩展
//  1. 属性接口     对 json 的约束
//  ts 中方法传入参数 
function printLabel(label) {
    console.log(label);
}
printLabel("sas");
/**
 * ts 中定义函数传入参数 对 json进行约束
 *
 */
function printLabel2(labelInfo) {
    console.log(labelInfo);
}
var labelInfo = { label: "ss", name: 323 };
printLabel2(labelInfo);
function printInfo(info) {
    console.log(info.name);
}
printInfo({ name: "李白", age: 33 });
var arrU = ["sws", "sws"];
var Dog2 = /** @class */ (function () {
    function Dog2(n) {
        this.name = n;
    }
    Dog2.prototype.eat = function (a) {
        console.log(str);
    };
    return Dog2;
}());
var dog = new Dog2("xiaom");
dog.eat("ss");
