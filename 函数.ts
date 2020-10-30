// ts 中定义函数的方法

//1. 函数声明法

function run3():string{
    return "run"
}

// 2. 匿名函数
let fun2 = function():number{
    return 123
}
console.log(fun2())

// ts 中定义方法传参:参数也可以规定类型
function getInfo(name:string,age:number):string{
    return name+age
}
// 没有返回值的方法

function funxx():void{
    console.log("no return")
}

// 方法可选参数，ts 中形参和实参必须一致，否则编译不通过。如果不一致，可以配置可选参数
// 可选参数必须定义到方法的最后面
function getInfo2(name:string,age?:number):string{
    if(age){
        return "there is no age"
    }else{
        return name + age
    }
}
getInfo2("dd")
//  getInfo("ede") // 编译会报错

// 默认参数,参数循序不影响
function fd(a="12",d=44):string{
    return a+d
}

// 剩余参数
function sun(...result:number[]):number{
    let sum = 0;
    for(let n of result){
        sum+ n
    }
    return sum
}

// 函数重载
// 通过为同一个函数提供多个函数类型定义来实现多种功能的目的

function css(config:string):string
function css(config:number):number
function css(config:number,age:number):number
function css(config:any,age?:number):any{
    return 1233
}
console.log(css(1323,123))