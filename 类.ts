// ts 中定义类

class Person {
    name: string // 属性，前面省略了 public 关键字

    constructor(name: string) { // 构造函数  实例化类的时候触发的方法
        this.name = name
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
}

let p = new Person('张三')
// alert(p.getName())

// ts 中实现继承

class Web extends Person{
    constructor(name:string){
        super(name)
    }
}

let w = new Web("李四")
alert(w.getName())

// 3.类里面的修饰符 typescript 定义属性的时候，提供了三种修饰符
/**
 * 不加属性，默认是共有属性
 * public : 公有， 在类里面，子类，类外面都可以访问
 * protect : 保护类型， 在类里面，子类里面 可以访问，在类外部都没法访问
 * private ：私有  在类里面可以访问，子类，类外部都没法访问
 */


class P2 {
    private age
    constructor(age:number){
        this.age = age
    }

    getAge():number{
        return this.age
    }
    // 静态方法中没法调用 实例的属性
    static print():void{
        console.log("静态方法")
    }
}

let p2 = new P2(55)
alert(p2.getAge())
P2.print()

// 多态： 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现

// 多态属于继承

class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(){

    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return "吃粮食"
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return "吃老鼠"
    }
}

// Typescript 中的抽象类，它是提供其他类继承的基类，不能直接被实例化

// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现而且必须在派生类中实现。

// abstract 抽象方法只能放在抽象类里面

// 抽象类和抽象方法用来定义标准

abstract class AnimalA {
    name:string
    constructor(name:string){
        this.name = name
    }
    abstract eat():void
}
class A extends AnimalA {
    constructor(name:string){
        super(name)
    }
    eat():void{
        
    }
}

// 静态属性
//  不用实例化，直接调用
class abc{
    static h_name:string = "abc";
}

console.log(abc.h_name)