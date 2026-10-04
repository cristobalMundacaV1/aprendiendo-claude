function sumar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("a y b deben ser números");
  }
  return a + b;
}

function restar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("a y b deben ser números");
  }
  return a - b;
}

if (require.main === module) {
  console.log("2 + 3 =", sumar(2, 3));
  console.log("8 - 5 =", restar(8, 5));
}

module.exports = { sumar, restar };
