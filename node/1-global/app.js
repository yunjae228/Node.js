const fs = require('fs');

global.hello = () => {
    global.console.log('hello')
}

global.hello()
hello()

// 노드 모듈 중 하나인 글로벌 오브젝트 안에는 흔히 쓰는 Array,Buffer,Error 등이 있다
// setInterval, setTimeout 등 글로벌하게 쓸 수 있는 함수도 들어있다