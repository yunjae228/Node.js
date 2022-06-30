let num = 1
const interval = setInterval(() => {
  //콜백함수
  console.log(num++)
}, 1000) // setInterval() = 1초마다 콜백함수 () => {} 가 실행됨

setTimeout(() => {
  console.log('timeout!')
  clearInterval(interval) // interval 객체로 받아와 clearInterval로 멈춤
}, 6000)
