(function(exports) {
  function expect(value) {

    function toEqual(assertion) {
      value === assertion ? console.log('✅') : console.log('❌')
    }

    function compareArray(array) {
      if (value.length != array.length) {
        console.log(false)
      }
      for (var i = 0; i < value.length; ++i) {
        if (value[i] != array[i]) {
          console.log(false)
        }
      }
      console.log('✅')
    }

    return {
      toEqual: toEqual,
      compareArray: compareArray
    }
  }

  exports.expect = expect

})(this)
