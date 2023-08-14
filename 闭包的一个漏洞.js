// 一个典型闭包场景，目的：屏蔽obj，不能让外部直接访问它，只能读取它的某一个属性，为保护obj的完整；可将此当做一个第三方库，提供了一些方法可供使用，保护了其内部的一些东西，不能被外部直接调用

var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            return obj[k]
        }
    }
})()

// // 问题：在不修改上面代码（不破坏其内部代码）的前提下，利用其提供的API如何修改obj的值？

console.log(o.get("a")) // 1
console.log(o.get("b")) // 2

// /*
//   思路：
//   利用其提供的get()方法不但可以访问到其内部的成员，还可以访问其原型
//  */

Object.defineProperty(Object.prototype, "x", {
    get() {
        return this
    }
})

const originObj = o.get("x")
originObj.a = 0
originObj.b = 9

console.log(o.get("a")) // 0
console.log(o.get("b")) // 9

// 修复此漏洞

// 方法一
var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            if (!obj.hasOwnProperty(k)) return
            return obj[k]
        }
    }
})()

Object.defineProperty(Object.prototype, "x", {
    get() {
        return this
    }
})

console.log(o.get("x")) //undefined
console.log(o.get("a")) // 1
console.log(o.get("b")) // 2

// 方法二

var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    Object.setPrototypeOf(obj, null)
    return {
        get: function (k) {
            return obj[k]
        }
    }
})()

Object.defineProperty(Object.prototype, "x", {
    get() {
        return this
    }
})

console.log(o.get("x")) //undefined
console.log(o.get("a")) // 1
console.log(o.get("b")) // 2
