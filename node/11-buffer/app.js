const fs = require('fs')

const buf = Buffer.from('Hi')
console.log(buf)
// output : <Buffer 48 69>
console.log(buf.length)
// output : 2
console.log(buf[0])
console.log(buf[1])
// 버퍼에 접근시, Array형태이기 때문에 이렇게 하면됨
// output : 72, 105
console.log(buf.toString())

// create
const buf2 = Buffer.alloc(2)
// 버퍼 새로 만듬
// 메모리에서 사용가능한 메모리 덩어리를 찾아와 초기화 시켜줌
const buf3 = Buffer.allocUnsafe() // fast
// 메모리에 기존 데이터는 있지만, 사용되지 않는 메모리라면
// 공간은 확보하지만 초기화 하지 않는 api

// concat => 여러가지 버퍼를 모을 수 있d음
const newBuf = Buffer.concat([buf1, buf2, buf3])
console.log(newBuf.toString())
