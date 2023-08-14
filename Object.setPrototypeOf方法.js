// Object.setPrototypeOf()是JS中一个设置对象原型的方法

// 基本语法
Object.setPrototypeOf(obj, prototype)

/* 
  obj：要设置原型对象的目标对象
  prototype：该对象的新原型
 */

// 该方法可以改变任意一个已有对象的内部属性，从而影响该对象的属性和方法的访问

const obj = {}
const proto = { a: 1 }

Object.setPrototypeOf(obj, proto)

console.log(obj.a) // 1

// 注意
// 修改对象的原型是一个非常高风险的操作，可能会导致对象的不可预期行为，建议尽量少使用
