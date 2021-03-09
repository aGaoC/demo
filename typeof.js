/*
 * @Author: your name
 * @Date: 2021-03-03 11:04:47
 * @LastEditTime: 2021-03-03 15:22:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/typeof.js
 */
// 判断元素类型
const arr = [1,2,3]
console.log(typeof(1))
 // number
 console.log(typeof('1'))
 // string
  console.log(typeof([1]))
 // object
//    console.log(typeof( {name:1} ))
//  // object
//     console.log(typeof(null))
//  // object
//  console.log(typeof(undefined)) // undefined
// //  判断是不是数组
//  console.log(arr instanceof Array)  // true
//  console.log(arr instanceof Object)  // true
//  console.log(Object.prototype.toString.call(arr)) // [object Array]
// console.log(Array.isArray(arr)) // true

// //  const obj = {
// //    a: 1,
// //    name: 'gao'
// //  }
// //  Object.prototype.c =2
// //  console.log( obj.hasOwnProperty('gao'))

// // 去重
// var arrList = [1,1,2,4,5,6,7,5,4]
// var b = Array.from(new Set(arrList)) 
// console.log(b)