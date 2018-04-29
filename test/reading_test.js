const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
        .then(() => done());
    });

    it('finds all users with the name of joe', (done) => {
        User.find({ name: 'Joe' })
        .then((users) => {
            console.log(users);
            done();
        })
    })
})


// models come with two finds
// User.find(criteira) - find all users that match the give criteira. Returns an array;
// User.findOne(criteira) - find the first user that matches the criteira. Returns a single record;