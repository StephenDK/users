const assert = require('assert');

// require the user model
const User = require('../src/user');
// two arguments can be called in the describe function
// first argument is a string that describes to test
// second argument is a function 
describe('Creating records', () => {

    // it function takes the same arguments as describe
    it('saves user', (done) => {
        // to make a assertion require assert library

        // new instance 
        const joe = new User({ name: 'Joe' });

        // save user to database 
        joe.save()
        .then(() => {
            // Has joe be save successfully
            // is new returns true if joe is not in db 
            // and returns false if joe is in db
            assert(!joe.isNew);
            done();
        })
    });
});


// to run tests add mocha to scripts to package.json