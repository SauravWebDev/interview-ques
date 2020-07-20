Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};

Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let arr = [1, 2, 4];
let arrMap = arr.myMap(function (i) {
  return 2 * i;
});

let arrFilter = arr.myFilter(function (i) {
  if (i % 2 == 0) {
    return true;
  }
  return false;
});

//console.log(arrMap);
//console.log(arrFilter);

//--------------------------------------------------------------------------------------

console.log("********** POlyfill of call example ***************");
/**
 * Polifyll of call
 */

Function.prototype.myCall = function (context, ...args) {
  context[this.name] = this;
  context[this.name](...args);
};

let testFn = function (param1, param2) {
  console.log("Inside function to call");
  console.log("this is ", this);
  console.log("params ", param1, param2);
};

let ob = {
  id: 123,
};
testFn.myCall(ob, "saurav", "delhi");
console.log("********** POlyfill of apply example ***************");
/**
 * Polifyll of apply
 */

Function.prototype.myApply = function (context, [...args]) {
  context[this.name] = this;
  context[this.name](...args);
};

let functionToApply = function (param1, param2) {
  console.log("Inside function to call");
  console.log("this is ", this);
  console.log("params ", param1, param2);
};

let applyOb = {
  id: 123,
};
functionToApply.myApply(applyOb, ["saurav", "delhi"]);

console.log("********** POlyfill of Bind example ***************");
/**
 * Polifyll of bind
 */

Function.prototype.myBind = function (context, ...args1) {
  let fn = this;
  return function (...args2) {
    let arg = [...args1, ...args2];
    fn.apply(context, arg);
  };
};
let person = {
  name: "saurav",
  age: "21",
  hobbies: ["cricket"],
};
let printHobbies = function (...additionaLhobies) {
  let h = [...this.hobbies, ...additionaLhobies];
  console.log(h);
};
let print = printHobbies.myBind(person, "basketball");
print("volleyball");
