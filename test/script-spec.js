const assert = require("assert");
// const { DESCRIBE } = require("sequelize/types/lib/query-types");
// this is a relative path to the function's location
const script = require("../problem/script.js");

describe("grabMovies()", function() {
    it('should return  the favorite movie of a person, their friends, and friends of their friends', function (){
        let test = grabMovies({Shrek: 1, Avengers: 3, HarryPotter: 5})
        let result = HarryPotter

        assert.strictEqual(test, result)
    })
})