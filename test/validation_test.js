const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
    
    it('requires a user name', () => {
        const user = new User({ name: undefined });
        // the regular validate does not return a result unless you use a callback function.
        // validate then becames a way to make asyrounous queries

        // validate sync is a syncrous validation process that returns a result
        const validationResult = user.validateSync();
        // to grab onto the merror message form mongodb
        //  ES5 syntax const message = validationResult.errors.name.message;
        // ES6 syntax
        const { message } = validationResult.errors.name;
        
        assert(message === 'Name is required.');
    });

    it('requires a user name longer than 2 character', () => {
        const user = new User({ name: 'Al' });
        const validationResult = user.validateSync();
        

        const { message } = validationResult.errors.name;
        
        assert(message === 'Name must be longer than 2 characters.');
    });

    it('disallows invalid records from being saved', (done) => {
        const user = new User({ name: 'Al' });
        user.save()
            .catch((validationResult) => {
                const { message } = validationResult.errors.name;

                assert(message === 'Name must be longer than 2 characters.');
                done();
            })
    })

});