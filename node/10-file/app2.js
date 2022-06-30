const fs = require('fs').promises

// read a file
fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch(console.error())

// output
// <Buffer 48 45 4c 4c 4f 20 57 4f 52 4c 44>

fs.writeFile('./file.txt', 'yo Hiiii').catch(console.error)
// function writeFile(
//     주절주절..
// ): Promise<void>;  => Promise가 void값이다 = 아무것도 리턴되지 않는다.
// 그래서 따로 .then()을 사용하지 않아도 된다. 그치만 catch는 해야함

// 추가(append)
fs.appendFile('./file.txt', 'kia').catch(console.error)
// copy
fs.copyFile('./file.txt', './file2.txt').catch(console.error)
// 이렇게 하면 file2.txt에 아무것도 안생길 수 있다. why? => 비동기적으로 실행되기 때문
// 그러니 순차적으로 하고싶다면 아래처럼 해보자.
fs.appendFile('./file.txt', 'kia')
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt')
  })
  .catch(console.error)
// 비동기는 순차적으로 될수도, 안될수도 있음 = 비동기적으로 하기 때문에 순서가 보장이 되지 않는다.
// 그러니 순서가 중요한 일이라면 then안에서 돌리자

// folder
fs.mkdir('sub-folder').catch(console.error)

fs.readdir('./').then(console.log).catch(console.error)
// 경로의 모든 폴더이름 가져오기
