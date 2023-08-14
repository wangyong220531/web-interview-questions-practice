// for-in是JS中遍历对象属性的一种方式

// 基本语法
// for (var key in obj) {
//     // 遍历代码
// }

// 其会遍历对象所有的可枚举的属性，包括从原型链上继承的属性

/* 
  特点：
  （1）不保证属性的顺序
  （2）会遍历原型链上的属性
  （3）不要在数组上使用for-in，而应使用for-of
  注：会避免遍历原型上的属性，可配合hasOwnProperty()使用
 */

var obj = {
    a: 1,
    b: 2
}

Object.prototype.c = function () {
    console.log("c")
}

for (var key in obj) {
    console.log(key)
}
/* 
  a
  b
  c
 */

var desc = Object.getOwnPropertyDescriptor(obj, "c")

console.log(desc) // undefined

var desc = Object.getOwnPropertyDescriptor(Object.prototype, "c")

console.log(desc)
/* 
  {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
 */

Object.defineProperty(obj, "c", {
    value: function () {
        console.log("c")
    },
    writable: true,
    configurable: true,
    enumerable: false
})

for (var key in obj) {
    console.log(key)
}

/* 
  a
  b
 */
