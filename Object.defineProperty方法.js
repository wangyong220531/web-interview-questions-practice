// Object.defineProperty()是JS中用于直接在对象上定义新属性或修改已有属性的方法，是ES5引入的方法，提供了细致的属性控制能力。

// 基本用法

// Object.defineProperty(obj, prop, discriptor)

/*  
  obj：要在其上定义新属性或修改已有属性的对象
  prop：要定义或修改的属性名
  discriptor：要定义或修改的属性描述符 
*/

/* 
  描述符是一个对象，可以包含以下键值：
  （1）value：属性的值
  （2）writable：属性是否可写
  （3）configurable：属性是否可以重新配置
  （4）enumerbale：属性是否可以被枚举
  （5）get：获取属性时调用的函数
  （6）set：设置属性时调用的函数
 */

let obj = {}

Object.defineProperty(obj, "x", {
    value: "99",
    writable: true,
    get() {
        return this
    }
})

console.log(obj.x) // 99
console.log(typeof obj.x) // string

obj.x = 0

console.log(obj.x) // 0
console.log(typeof obj.x) // number

console.log(obj.get())
