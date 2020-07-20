let p1 = new Promise((resolve, reject) => resolve("p1"));
let p2 = new Promise((resolve, reject) => resolve("p2"));
let p3 = new Promise((resolve, reject) => reject("p3"));

Promise.all([p1, p2])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
