const fs = require('fs')

const writestream = fs.createWriteStream('./12-stream/file2.txt')
writestream.on('finish', () => {
  console.log('finish')
})

writestream.write('hello ')
writestream.write('world')
writestream.end()
