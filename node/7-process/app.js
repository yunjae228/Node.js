const process = require('process')

console.log(process.execPath) // 현재 실행되고 있는 노드의 위치
console.log(process.version) // 노드버전
console.log(process.pid) // 프로세스 아이디
console.log(process.ppid) // 프로세스 부모 아이디
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())

setTimeout(() => {
  console.log('setTimeout') // 모든 함수가 다 콜스택에서 빠져나간후 setTimeout
}, 0) // Why? 콜스택이 비지 않아서

process.nextTick(() => {
  console.log('nextTick')
})

for (i = 0; i < 1000; i++) {
  console.log('for loop')
}

/* Output
.
.
.
for loop
for loop
for loop
nextTick
setTimeout

*/
