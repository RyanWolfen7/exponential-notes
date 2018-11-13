function Expect(value) {
  this.value = value;
}

Expect.prototype.toEqual = function(assertion) {
  console.log(this.value === assertion)
}

module.exports = Expect
