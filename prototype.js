/*
 * @Author: your name
 * @Date: 2021-02-19 14:49:00
 * @LastEditTime: 2021-02-19 15:01:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/prototype.js
 */
function Person() {

}

const person = new Person()
person.name = 'gao'
Person.prototype.name = 'gui'
delete person.name
console.log(person.__proto__ === Person
.prototype, '------')
Object.prototype.money = '1000W'
console.log(person.money)
console.log(Object.prototype)
// person.__proto__