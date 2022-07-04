const EventEmitter = require('events')

const emitter = new EventEmitter()

const callback1 = (args) => {
  console.log('first callback - ', args)
}
emitter.on('ellie', callback1)

emitter.on('ellie', (args) => {
  console.log('second callback -', args)
})

emitter.emit('ellie', { message: 1 })
// 이벤트 이름 (ellie)와 전달하고자 하는 데이터 message(json)
// callback 함수 (args)에서 데이터에 접근 가능함
emitter.emit('ellie', { message: 2 })
emitter.removeListener('ellie', callback1)
emitter.emit('ellie', { message: 3 })

// nodejs 환경에서 events 패키지를 사용하여
// 특정 콜백함수를 등록, 이벤트를 발생 시킬 수 있다
