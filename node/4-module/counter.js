let count = 0

function increase() {
  count++
}

function getCount() {
  return count
}

module.exports = {
  increase,
  getCount,
}

console.log(module) // Output : 현재 exports하려는 함수 보여줌 .
