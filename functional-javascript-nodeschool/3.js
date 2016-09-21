function doubleAll(numbers) {
      var result = []

      numbers.map(function(n) {
          result.push(n*2)
      });

      return result
    }

    module.exports = doubleAll
