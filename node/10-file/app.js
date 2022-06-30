const fs = require('fs') // FileSystem

// 3가지 형태로 제공
// 1. 비동기: rename(...., callback) 일을 수행한 후, callback 함수 호출해줌
// 2. blocking: try {renameSync(...)} catch(e){} 따로 콜백함수를 전달하지 않음, 잘못되면 error 발생, 끝날때까지 다음 줄로 안넘어감
// 2번 잘안씀
// 3. promises.rename().then().catch(0)

// 동기적 방법
try {
  fs.renameSync('./text.txt', './file.txt')
} catch (e) {
  console.log(e)
}
console.log('hello')
// try catch로 에러를 잡아서 노드가 종료되지 않게 함

//비동기적 방법
fs.rename('./file.txt', './newfile.txt', (error) => {
  console.log(error)
})

// promise
fs.promises
  .rename('./newfile.txt', './text-new.txt')
  .then(() => {
    console.log('done')
  })
  .catch(console.error)

// Error
// 첫번째 rename은 동기적이기 때문에 파일 명이 바뀌어 지지만,
// 두번째 ,세번째 rename은 비동기적으로 실행되기 때문에 어느함수가 먼저 호출될지 아무도 모른다.
// 그래서 에러남
