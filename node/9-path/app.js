const path = require('path') // 경로 표현방법은 운영체제마다 다를 수 있음
// 운영체제별로 경로표현방법이 달라도 잘 표현 할 수 있게 해주는게 얘임.

// POSIX (Unix: macOS, Linux ) : "Users/temp/example.html"
// Window : 'C:\\temp\myfile.html'

console.log(__dirname) // 현재 수행되고 있는 디렉토리 경로/이름
console.log(__filename) // 현재 수행되고 있는 파일 경로/이름
// dirname, filename => 글로벌에 있는 객체들임

console.log(path.sep) // 경로 구분자
console.log(path.delimiter) // 환경변수 구분자

// Output => /, :

// basename
console.log(path.basename(__dirname))
console.log(path.basename(__filename))
// Output
// 9-path
// app.js

// dirname
console.log(path.dirname(__filename))
// extension name
console.log(path.extname(__filename))
// parse
const parsed = path.parse(__filename)
console.log(parsed)
/* Output
{
    root: '/',
    dir: '/Users/ihyejin/Desktop/LearnJS/NodeJS/node/9-path',
    base: 'app.js',
    ext: '.js',
    name: 'app'
  } */

const str = path.format(parsed) // Object형태로 파싱된 데이터를 다시 string으로 바꿈
console.log(str)

// isAbsolute 절대 경로 확인
console.log('isAbsolute?', path.isAbsolute(__dirname)) // /Users/
// 절대경로가 맞으면 true return, 아니면 false return
console.log('isAbsolute?', path.isAbsolute('../'))

// normalize 잘못된 경로 고쳐줌
console.log(path.normalize('./folder//////////'))

// join
console.log(__dirname + path.sep + 'image')
console.log(path.join(__dirname, 'image'))
// dirname에 만들고 싶은 경로 name 적으면 경로 생성해줌
