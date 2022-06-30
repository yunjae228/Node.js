console.log('code1')
setTimeout(() => {
  console.log('settimeout 0')
}, 0)

console.log('code2')
setImmediate(() => {
  console.log('setimmediate')
})

console.log('code3')
process.nextTick(() => {
  console.log('process.nexttick')
})

/* 
    실행과정 
    1. code 1 , code2, code3 순서대로 출력
    2. 다 완료된 후 ( 콜스택이 빈상태) 태스크 큐에 담긴 콜백함수들이 콜스택에 쌓임
    3. 순차적으로 수행
    4. process.nextTick()이 우선순위가 가장 높아 태스크 큐에 담길때 제일 먼저 들어감
    5. 태스크 큐 => 선입선출(FIFO)

    <Output>
code1
code2
code3
process.nexttick
settimeout 0
setimmediate
*/
