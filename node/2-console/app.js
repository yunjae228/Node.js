console.log('logging....')
console.clear

// log level 심각한 정도에 따라 강조
console.log('log')  //개발용
console.info('info')    // 중요한 정보에 대해 남기고 싶을때
console.warn('warn')    // 치명적인 에러는 아님 (경고 수준)
console.error('error')  // 심각한 에러일때 (에러, 사용자에러, 시스템에러)

// assert 첫번째 인자로 전달한 값이 true가 아닐때만 로그로 출력 가능함
console.assert(2 === 3, 'not same!')
console.assert(2 === 2, 'same')
// Output  'Assertion failed: not same!'

// print object 오브젝트 출력시 쓸 수 있는 API
const student = { name: 'yj', age: '25', company: {name : 'UC'}}
console.table(student) // 오브젝트를 테이블 형태로 출력
console.dir(student, { showHidden:true, colors: false, depth: 0})

// measuring time
console.time('for loop') // 성능 확인시 사용하면 유용 
for (let i=0; i<10; i++) {
    i++
}

console.timeEnd('for loop')

// counting 
function a() {
    console.count('a function')
}
a()
a()

// trace
function f1() {
    f2()
}
function f2() {
    f3()
}
function f3() {
   console.log('f3')
   console.trace()
}
f1()