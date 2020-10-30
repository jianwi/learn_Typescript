// 布尔类型
let flage: boolean = true

// 数字类型
let a: number = 123
console.log(a)
// a=false 赋值其他类型，报错
a = 12.3
console.log(a)

//  字符串类型

let sr: string = "this is ts"
console.log(sr)

//  数组类型,TS 有两种方法定义数组
let arr: number[] = [1, 3, 4] // 只能放 number 类型
console.log(arr)

// 第二种方法定义数组

let arr2: Array<string> = ['php', 'js', 'html',]
console.log(arr2)

// 第三种定义数组 （任意类型元素）
let arr5:any[] = ["dede",213,false]

// 元组类型 （tupe）,属于数组的一种。用于指定数组里面值的类型
let arr3: [string, number, boolean] = ["31", 323, false]
console.log(arr3)

// 枚举类型
enum Flag {
    success = 1,
    error = -1
}

let f:Flag = Flag.success

console.log(f)

enum Color{red=3,blue,orange}
let c:Color = Color.blue
console.log(c) // 4 如果不在枚举中设置值，则默认是索引值

// 任意类型 (any)，用在Object 类型上，否则会报错
let body = document.body
body.innerHTML = "ddd"
let anyd:any = 323
anyd = "string"
console.log(anyd)

// 其他类型 undefined null ，联合类型语法
let num:number|undefined;
console.log(num)

// 一个元素可能是 number ，可能是 null ,可能是 undefined

let num2:number|null|undefined|string;
num2 = "323"
num2 = "xec"

// void 类型，表示没有任何类型，一般般用于定义方法的时候没有返回值
// 表示这个方法没有返回任何类型
function run2():void{
    console.log("run")
}
run2()

//其他类型：nerver 类型（包括null和undefined）的子类型，代表从不会出现的值
// nerver 的变量只能被nerver类型所赋值

let a23:never;

a23 = (()=>{
    throw new Error('错误')
})()
