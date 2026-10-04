const assert = require("node:assert/strict");
const { sumar, restar } = require("./app");

assert.equal(sumar(2, 3), 5);
assert.equal(restar(8, 5), 3);
assert.throws(() => sumar("2", 3), TypeError);
assert.throws(() => restar(8, null), TypeError);

console.log("Tests OK");
