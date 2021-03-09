/*
 * @Author: your name
 * @Date: 2021-02-19 15:47:08
 * @LastEditTime: 2021-03-05 16:16:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/比包.js
 */

// var name = 'gao'
// // function getName () {
// //   const name = 'gui'
// //   function foo(){
// //     console.log(name, 'name')
// //     return name
// //   }
// //   return foo
// // }

// // const a = getName()
// // a()
// // console.log(this)
// function b() {
//   const name = 'lll'
//   this.name = 'kkk'
//   console.log(this, 'this-----')
//   console.log(name)
// }
// b()

// console.log(name)
// console.log('1');

console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 1 7 6 8 2 4 3 5 9 11 10 12