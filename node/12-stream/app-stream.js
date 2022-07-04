const fs = require('fs')

const readstream = fs.createReadStream('./12-stream/file.txt', {
  // highWaterMark: 8,
  // 64 kbytes가 default
  // encoding: 'utf-8',
})
// readstream에서 addeventlistener를 사용할 수 있다.
// 함수정의 잘 살펴보기

const data = []
readstream.on('data', (chunk) => {
  // console.log(chunk)
  data.push(chunk)
  console.count('data')
})

readstream.on('end', () => {
  console.log(data.join(''))
})
readstream.on('error', (error) => {
  console.log(error)
})
