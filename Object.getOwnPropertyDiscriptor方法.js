// Object.getOwnPropertyDiscriptor()是一个获取对象指定属性描述符的方法

// 基本语法
Object.getOwnPropertyDescriptor(obj, prop)

/* 
  obj：需要获取属性描述符的对象
  prop：目标属性名
 */

/* 
  其会返回该属性的描述对象，包含以下内容：
  （1）value：属性值
  （2）writable：是否可写
  （3）configurable：是否可以删除或重新定义
  （4）enumerable：是否可以被枚举
  （5）get/set：函数或undefined
 */

var obj = { foo: 1 }

var desc = Object.getOwnPropertyDescriptor(obj, "foo")

console.log(desc)
/* 
  {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  }
*/
