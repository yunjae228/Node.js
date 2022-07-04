const fs = require('fs')

const beforeMem = process.memoryUsage().rss

fs.readFile('./12-stream/file.txt', (_, data) => {
  fs.writeFile('./12-stream/file2.txt', data, () => {}) // calculate
  const afterMem = process.memoryUsage().rss
  const diff = afterMem - beforeMem
  const consumed = diff / 1024 / 1024
  console.log(diff)
  console.log(`Consumed Memory: ${consumed}MB`)
})
