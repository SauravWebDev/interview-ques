function deepComparison(ob1, ob2) {
  if (typeof ob1 != typeof ob2) {
    return false;
  }
  if (typeof ob1 == "number" || typeof ob1 == "string") {
    if (ob1 != ob2) {
      return false;
    }
  }

  if (Array.isArray(ob1) && Array.isArray(ob2)) {
    if (!arrayEqual(ob1, ob2)) {
      return false;
    }
  }

  /// objects
  let ob1Keys = ob1.keys;
  let ob2Keys = ob2.keys;
  if (!arrayEqual(ob1Keys, ob2Keys)) {
    return falsel;
  }

  for (let i in ob1Keys) {
    if (!deepComparison(ob1[ob1Keys[i]], ob2[ob1Keys[i]])) {
      return false;
    }
  }

  return true;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  arr1 = arr1.sort(function (a, b) {
    return a - b;
  });
  arr2 = arr2.sort(function (a, b) {
    return a - b;
  });
  for (let i in arr1) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

1) deep comparison object  // write own function
2) flatten array // write own function
3) memorize a function // write own function

4)
let arr = [2,4,5,2,4,5,5,6,3];

let arr_set = [...new Set(arr)];

let foo = arr_set.reduce((a,b) => a+b, 0);

console.log(foo+arr_set.length); /// what will be output

5)react-redux connect
6)PubSub implementation
6)BEM methodology
