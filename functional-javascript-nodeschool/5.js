function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        //check if submittedUsers is inside of good Users
        //use array some and array every
        var count = 0;
        submittedUsers.every(function(e) {
            goodUsers.some(function(ee, i, a) {
                console.log(e.id === ee.id);
                if (e.id == ee.id) { count++; }
            });
        });

        return count;
        console.log(count);
      };

    }

    module.exports = checkUsersValid
