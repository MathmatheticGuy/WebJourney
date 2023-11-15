var a = "Global scope";
console.log("global: message = " + a);

let A = () => {
  var a = "Inner Scope";
  console.log("a: message = " + a);

  B();
}

let B = () => {
    console.log("b: message = " + a);
}

A();
