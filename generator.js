/*
function* foo() {
  let x = yield "please provide x";
  let y = yield "please provide y";
  let z = yield "please provide z";
  return x + y + z;
}

let generateFoo = foo();

console.log(generateFoo.next());
console.log(generateFoo.next(10));
console.log(generateFoo.next(20));
console.log(generateFoo.next(30));
*/

function async() {
  setTimeout(() => {
    it.next(Math.random());
  });
}
function* main() {
  let res = yield async();
  let data1 = res;
  console.log("data1 ", data1);
  let res2 = yield async();
  let data2 = res;

  console.log("data2 ", data2);
}

let it = main();
it.next();
