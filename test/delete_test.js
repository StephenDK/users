const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
        .then(() => done());
    });

    it('model instance remove', (done) => {
        // this model remove uses the joe instance set above
        joe.remove()
        .then(() => User.findOne({ name: 'Joe' }))
        .then((user) => {
            assert(user === null);
            done();
        });
        
    })

    it('class method remove', () => {
        // While class removes use the User model
    })

    it('class method findAndRemove', () => {

    })

    it('class method findByIdAndRemove', () => {

    })

});


// mongoose uses the terminology 'remove' to delete a user