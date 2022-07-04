const fs = require('fs')
const zlib = require('zlib')

const readstream = fs.createReadStream('./12-stream/file.txt')
const zlibstream = zlib.createGzip()
const writestream = fs.createWriteStream('./12-stream/file3.zip')

const piping = readstream.pipe(zlibstream).pipe(writestream) // creatreadstream 으로 읽어들인 파일을 .pipe() 메소드로 연결
// stream과 stream을 연결

piping.on('finish', () => {
  console.log('done')
})
