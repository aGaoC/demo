/*
 * @Author: 小海海
 * @Date: 2020-12-03 14:24:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-23 18:01:00
 * @FilePath: /demo/apply.js
 */
Function.prototype.ownApply = function(context, args) {
  // context = (typeof context === 'object' ? context : window)
  context = context || window
  args = args || []
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result

}
//复制代码// 验证样例
function fun(arg1, arg2) {
  console.log(this.name)
  // console.log(arg1 + arg2)
}
const nameObj = { name: 'YIYING' }
name = 'gao'
[2,3]
// 参数为数组;方法立即执行
fun.ownApply(nameObj)
