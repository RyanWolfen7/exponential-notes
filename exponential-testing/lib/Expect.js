function Expect(value) {
  this.value = value;
}

Expect.prototype.toEqual = function(assertion) {
  console.log(this.value === assertion)
}

Expect.prototype.compare_array = function(array) {
  if (this.value.length != array.length) {
    return console.log(false)
  }

  for (var i = 0; i < this.value.length; ++i) {
    if (this.value[i] != array[i]) {
      return console.log(false)
    }
  }

return console.log(true)
}

module.exports = Expect
