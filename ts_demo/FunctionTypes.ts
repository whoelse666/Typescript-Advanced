/*//TODO 函数类型   */

function func(a: number, b: number): string {
  return "func1"
}

func(100, 200)

/* 

可选参数

在参数后面加一个 ? 号
function func (a: number, b?:number): string {
    return 'func1'
}

func(100)
使用 es6，添加默认参数，因为添加默认值的参数就可有可无。
function func (a: number, b:number = 10): string {
    return 'func1'
}

func(100)
*/

// 接收任意个数参数,使用 es6 的 ...操作符.

function func1(a: number, ...rest: number[]): string {
  console.log("rest", rest)
  return "func1"
}
func1(100, 200, 300, 400)

// 如果是把一个函数作为参数传递，也就是回调函数的方式，
// 一般我们就会去约束我们这个回调函数形参的类型，
// 使用类似箭头函数的方式去表示我们这个参数接收什么类型的函数，这种方式在定义接口的时候经常用到。

const func2: (a: number, b: number) => string = function (a: number, b: number): string {
  return "func1"
}

const f = func2(100, 200)
console.log("f", f)
