function hello() {
  console.log(this)
  console.log(this === global)
}

hello()
// Output : true, global 객체 출력

class A {
  constructor(num) {
    this.num = num
  }
  memberFunction() {
    console.log('----class----')
    console.log(this)
    console.log(this === global)
  }
}

// class 내부에서 this는 class 자기 자신을 가르키지만
// class 외부에서 this는 global을 가리킨다

const a = new A(1)
a.memberFunction()

// Output : false
