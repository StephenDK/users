const assert = require('assert');
// two arguments can be called in the describe function
// first argument is a string that describes to test
// second argument is a function 
describe('Creating records', () => {

    // it function takes the same arguments as describe
    it('saves user', () => {
        // to make a assertion require assert library
        assert(1 + 1 === 2);
    });
});


// to run tests add mocha to scripts to package.json