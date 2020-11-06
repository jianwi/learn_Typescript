"use strict";
// ts 中定义类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('张三');
// alert(p.getName())
// ts 中实现继承
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person));
var w = new Web("李四");
alert(w.getName());
// 3.类里面的修饰符 typescript 定义属性的时候，提供了三种修饰符
/**
 * 不加属性，默认是共有属性
 * public : 公有， 在类里面，子类，类外面都可以访问
 * protect : 保护类型， 在类里面，子类里面 可以访问，在类外部都没法访问
 * private ：私有  在类里面可以访问，子类，类外部都没法访问
 */
var P2 = /** @class */ (function () {
    function P2(age) {
        this.age = age;
    }
    P2.prototype.getAge = function () {
        return this.age;
    };
    // 静态方法中没法调用 实例的属性
    P2.print = function () {
        console.log("静态方法");
    };
    return P2;
}());
var p2 = new P2(55);
alert(p2.getAge());
P2.print();
// 多态： 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return "吃粮食";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return "吃老鼠";
    };
    return Cat;
}(Animal));
// Typescript 中的抽象类，它是提供其他类继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现而且必须在派生类中实现。
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准
var AnimalA = /** @class */ (function () {
    function AnimalA(name) {
        this.name = name;
    }
    return AnimalA;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(name) {
        return _super.call(this, name) || this;
    }
    A.prototype.eat = function () {
    };
    return A;
}(AnimalA));
// 静态属性
//  不用实例化，直接调用
var abc = /** @class */ (function () {
    function abc() {
    }
    abc.h_name = "abc";
    return abc;
}());
console.log(abc.h_name);
