// ts 中的接口
//   属性类接口
//   函数类型接口
//   可索引接口
//   类类型接口
//   接口扩展

//  1. 属性接口     对 json 的约束

//  ts 中方法传入参数 

function printLabel(label: string): void {
    console.log(label)
}

printLabel("sas")

/**
 * ts 中定义函数传入参数 对 json进行约束
 * 
 */
function printLabel2(labelInfo: { label: string }): void {
    console.log(labelInfo)
}

let labelInfo = { label: "ss", name: 323 }
printLabel2(labelInfo)

// 对批量的方法进行约束
interface Info{
    name:string
    age:number
}

function printInfo(info:Info){
    console.log(info.name)
}

printInfo({name:"李白",age:33})


//  接口：可选属性
interface FullName{
    firstName:string
//  可选属性，加个 ?
    lastName?:string
}

//  可索引约束： 对数组的约束

interface UserArr{
    [index:number]:string
}

let arrU:UserArr = ["sws","sws"]

//  可索引的约束： 对对象约束

interface UserObj{
    [index:string]:string
}

//  类类型接口

interface Animal{
    name:string
    eat(a:string):void
}

class Dog2 implements Animal{
    name:string
    constructor(n:string){
        this.name = n
    }
    eat():void{
        console.log(str)
    }
}

let dog = new Dog2("xiaom")
dog.eat()