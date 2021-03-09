/*
 * @Author: your name
 * @Date: 2021-03-05 14:05:10
 * @LastEditTime: 2021-03-05 15:13:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/copy.js
 */
// 深拷贝
let a ={
  name: 'ssss',
  d: function() {
    console.log('a')
  }
}
// let b = JSON.parse(JSON.stringify(a))
// let b = Object.assign(a)
// b.name = 'aaa'
// console.log(b, 'b-----',a,'a-----')
let c = {}
function copyFun(a) {
  if(typeof(a) === 'object') {
    c = Array.isArray(a) ? [] : {}
    // let c = {}
    for (const key in a) {
      if (Object.hasOwnProperty.call(a, key)) {
        c[key] = a[key]
      }
    }
  }
}
copyFun(a)
console.log(c)
c.d()