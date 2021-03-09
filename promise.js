/*
 * @Author: your name
 * @Date: 2021-02-19 17:58:48
 * @LastEditTime: 2021-02-23 15:21:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/promise.js
 */

// let a =   new Promise((resolve, reject) => {
//     resolve(1)
// })

// a.then((data)=> {
//   console.log(data)
// })
// console.log(a)
var twoSum = function (nums, target) {
  var a = undefined
  var index = undefined
  var arr = []
  var c = []
  for (let i = 0; i < nums.length; i++) {
    c= nums
    a = target - nums[i]
    console.log(a)
    c[i] = null
    //   c.shift(n)
    index = c.indexOf(a)
    
    console.log(index, 'index---')
    if (index != -1 && index != i) {
      arr[0] = i
      arr[1] = index
      return arr

    }
  }
  // return arr
}
var c = twoSum([3,3], 6)
console.log(c)
